const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");
//where database created


dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/order', require('./routes/order'))
app.use('/category', require('./routes/category'))
app.use('/product', require('./routes/product'))
app.use('/users', require('./routes/users'))


const startApp = async () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`server run on port ${PORT}`)
    });
      
}
startApp();