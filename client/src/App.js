import React, { useEffect, useState } from 'react';
import './App.css'
const axios = require('axios')
const App = () => {
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [selectedprod, setselectedprod] = useState({});
  const [price, setprice] = useState(0);
  const [selecetedcateg, setselecetedcateg] = useState(0);
  const [discount, setdiscount] = useState('');
  const [available_quantity, setavailable_quantity] = useState(0);
  const [msg, setmsg] = useState('');
  const [userID, setuserID] = useState([]);
  const [selectedUserID, setselectedUserID] = useState(null);
  useEffect(() => {
    //get product category
    axios.get('http://localhost:5000/category')
      .then(result => {
        setcategories(result.data)
      })
      axios.get('http://localhost:5000/users')
      .then(result => {
        setuserID(result.data)
      })
  }, []);
  //when choose a category get its related products
  const getProducts = (e) => {
    setselecetedcateg(e.target.value)
    axios.get('http://localhost:5000/product/' + e.target.value)
      .then(result => {
        setproducts(result.data)
      })
  }
  const placeorder = () =>{
    if(selecetedcateg && selectedprod){
    axios.post('http://localhost:5000/order/discount',{
      price : price,
      category_id : selecetedcateg,
      user_id : selectedUserID,
      product_id : selectedprod,
    })
    .then(result => {
      setdiscount(result.data)
    })
  }
  }
  const checkout = () =>{
    if(selecetedcateg && selectedprod){
      axios.post('http://localhost:5000/order',{
        price : price,
        category_id : selecetedcateg,
        user_id : selectedUserID,
        product_id : selectedprod,
        discount: discount.substring(discount.lastIndexOf(" ")+1),
      })
      .then(result => {
       console.log(result.data)
       setmsg('Order placed successfuly')
      })
    }
  }
  const category = [];
  const product = [];
  const users = [];
  if (userID) {
    userID.map(us => {
      users.push(<option key={us.UserID} value={us.UserID}>{us.Username}</option>)
    })
  }
  if (categories) {
    categories.map(cat => {
      category.push(<option key={cat.category_id} value={cat.category_id}>{cat.category_name}</option>)
    })
  }
  if (products) {
    products.map(prod => {
      product.push(<option key={prod.product_id} value={prod.product_id}>{prod.product_name}</option>)
    })
  }
  return (
    <div className="container">
      <select onChange={(e) => setselectedUserID(e.target.value)}>
        <option value='0' hidden>choose user..</option>
        {users}
      </select>      
      <select onChange={getProducts}>
        <option value='0' hidden>choose category..</option>
        {category}
      </select>
      <select onChange={(e) => {
        setselectedprod(e.target.value)
        products.map(el => {if(el.product_id == e.target.value){ setprice(quantity * el.price);
          setavailable_quantity(el.quantity);
          if(el.quantity <= 0)
          setmsg('SOLD OUT')
           else 
           setmsg('') }})
      }}>
        <option value='0' hidden>choose product..</option>
        {product}
      </select>
      <label>quantity</label>
      <input type="number" id="points" name="points" max={available_quantity} min="1" step="1" value={quantity} onChange={(e) => {
         products.map(el => el.product_id == selectedprod ? setquantity(quantity => { quantity = e.target.value; setprice(quantity * el.price); return quantity; })  : null)
        }}  disabled={available_quantity <= 0? true:false}/>

      <input type="text" value={price} readOnly  disabled={available_quantity <= 0? true:false}/>
      <button onClick={placeorder} disabled={available_quantity <= 0? true:false}>Checkout</button>
      <p>{discount}</p>
      <button onClick={checkout} disabled={available_quantity <= 0? true:false}>finish order</button>
      <p>{msg}</p>
    </div>
  );
};

export default App;
