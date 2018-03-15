const express = require('express')
const app = express()
const axios = require('axios')

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2'

const buildRequestUrl = (type = 'name', input) => {
  return `${COUNTRIES_URL}/${type}/${input}`
}

app.get('/api/countries', async (req, res) => {
  const input = req.query.q
  try {
    const requestUrl = buildRequestUrl('name', input)
    const response = await axios.get(requestUrl)
    res.json(response.data)
  } catch (err) {
    res.setStatus(500).json({ error: err.message })
  }
})

app.listen(5001, () => `API listening on port 5001`)
