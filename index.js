const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


const categories = require('./data/categories.json')

const news = require('./data/news.json')

app.use(cors())


app.get('/', (req, res) => {
    res.send("Dragon is Running")
});

// Category data load

app.get('/categories', (req, res) => {
    res.send(categories);
})

// News data load

app.get('/news', (req, res) => {
    res.send(news)
})

// News er id theke find

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

// Category wise filter

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }

})



app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
