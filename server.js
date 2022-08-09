const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://c7cb6d58-3c7e-4ca2-bb75-e4e36ae61245-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:PYyuOSyJptjwbvNJLjPYKQgr:6a8405cdcc1de2df640195408af35d694bcc38131efb687232b6b91b5f02f73b'

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