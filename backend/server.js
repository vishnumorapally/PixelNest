const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

const DATA_PATH = path.join(__dirname, '..', 'frontend', 'src', 'assets', 'data', 'images.json')


// Get all images
app.get('/api/images', (req, res) => {
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Read error:', err)
      return res.status(500).json({ error: 'Failed to read images.json' })
    }
    try {
      res.json(JSON.parse(data))
    } catch (parseErr) {
      console.error('Parse error:', parseErr)
      return res.status(500).json({ error: 'Invalid JSON format in images.json' })
    }
  })
})

// Add a new image
app.post('/api/images', (req, res) => {
  const newImage = req.body
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read images.json' })
    let images = JSON.parse(data)
    // Assign a new id
    newImage.id = images.length ? Math.max(...images.map(img => img.id)) + 1 : 1
    // Parse tags if it's a string
    if (typeof newImage.tags === 'string') {
      newImage.tags = newImage.tags.split(',').map(tag => tag.trim())
    }
    images.push(newImage)
    fs.writeFile(DATA_PATH, JSON.stringify(images, null, 4), err => {
      if (err) return res.status(500).json({ error: 'Failed to write images.json' })
      res.json({ success: true, image: newImage })
    })
  })
})

// Add this to server.js
app.put('/api/images/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const updatedData = req.body
  fs.readFile(DATA_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read images.json' })
    let images = JSON.parse(data)
    const idx = images.findIndex(img => img.id === id)
    if (idx === -1) return res.status(404).json({ error: 'Image not found' })
    // Merge updates
    images[idx] = { ...images[idx], ...updatedData, id }
    fs.writeFile(DATA_PATH, JSON.stringify(images, null, 4), err => {
      if (err) return res.status(500).json({ error: 'Failed to write images.json' })
      res.json({ success: true, image: images[idx] })
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})