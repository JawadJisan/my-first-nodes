const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) =>{
    res.send("Hellow  from the my first nodes World");
});

const users =[
    {id:1, name:'jhanker', email: 'jhankerrmahbub@gmail.com', phone: '1214231'},
    {id:2, name:'mahbub', email: 'mahbuberrmahbub@gmail.com', phone: '1214231'},
    {id:3, name:'kamal', email: 'kamalrrmahbub@gmail.com', phone: '1214231'},
    {id:4, name:'Jamal', email: 'Jamalrmahbub@gmail.com', phone: '1214231'},
    {id:5, name:'Lili', email: 'Lilirmahbub@gmail.com', phone: '1214231'}
]

// app.get('/users', (req, res)=>{
//     console.log('query', req.query)
//     res.send(users)
// });


// filter by using query

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    res.send(users)
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params)
    const id= parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    console.log(id)
    res.send(user)
});
app.get('/fruits', (req, res)=>{
    res.send(['mango', 'banana'])
})

// post or recive data from client side
app.post('/user', (req, res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})