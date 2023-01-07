import express from "express"
import mysql from 'mysql'
import cors from 'cors';



const app = express();
app.use(express.json()); //parsing incoming json requests
app.use(cors());

//Creating connection to my mysql 
const db = mysql.createConnection({
    host:'127.0.0.1',
    user: 'devuser',
    password:'Josefinaflores73',
    database:'x100pre',
});

// when connected want it to let me know if it is if not throw error
db.connect((err) => {

    if (err) {
        console.log(`Can't connect to database`, err)
        return;
    }
    console.log(`Connected to database`)
})

//letting me know theres a connection 
app.get('/',(req,res)=>{
    res.json("THERES A CONNECTION WITH THE BACKEND :P")
});

//will show the postman get call on localhost:5000/products
//where we are selecting products from database
app.get('/products', (req,res)=>{
    const q ="SELECT * FROM products"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

//listening on port 5000
app.listen(5000, ()=>{
    console.log('The server is running on port 5000')
});




// //EXPRESS USING PATH if we use the require/path

// app.use(express.static(path.join(__dirname, './client', './build')));
// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname, './client', './build', 'index.html'));
// });



//this is the lastest version on my github x100pre--v2.0