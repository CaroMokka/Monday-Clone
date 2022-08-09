const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://54f61ce3-4d88-4d0b-bed8-af80d5f20689-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:uwkjSbJPbSPUJfGLEAPPbbXT:a524aa5556410a8c7237196b1373dc29f7414b2ca5f4ae9b99c91faf67660aa9'

app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-type': 'application/json'
        },
        data: formData
    }
    try{
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.listen(PORT, () => console.log('server running on PORT ' + PORT))