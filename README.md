# RetailApp
# run front + back  : npm run dev
# run back only : npm run server

please npm install first in client and server.

sql database name: retailshop
sql database details script : reatailshop.sql
.env file contains credentials

## app idea
1. get products categories
2. select category from list.
3. get available products within this category
4. select a product from list
5. if quantity <= 0 sold out else select quantity up to max available quantity
6. update price based on quantity and its price
7. press checkout to search for discounts
8. press finish order to insert order to table with the discount if exist 

## requests
get: 'http://localhost:5000/category'
get:  http://localhost:5000/product/+category_id
post: 'http://localhost:5000/order/discount'
post: 'http://localhost:5000/order

## for simplification
1. order placed contain one single product
2. employ,affiliate,customer combined in one table "users"
3. react app not css-ed very basic view
4. no user auhentication or validation yet so by default user_id is chosen from a list for user role(customer,...) check

module used:
backend
    "concurrently": "^5.3.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql": "^2.18.1"
frontend
    "axios"
