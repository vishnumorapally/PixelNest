import React, { useState } from 'react'
import "../assets/css/About.css"
import "../assets/css/Admin.css"

const ADMIN_PASSWORD = "vishnu"

export const Admin = () => {
  const [form, setForm] = useState({
    id: '',
    img: '',
    title: '',
    description: '',
    category: '',
    tags: ''
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLoad = async () => {
    setSuccess(false)
    setError('')
    if (!form.id) {
      setError('Please enter an ID to load.')
      return
    }
    try {
      const res = await fetch('http://localhost:5000/api/images')
      const images = await res.json()
      const img = images.find(i => String(i.id) === String(form.id))
      if (!img) {
        setError('Image with this ID not found.')
        setIsUpdate(false)
        return
      }
      setForm({
        id: img.id,
        img: img.img || '',
        title: img.title || '',
        description: img.description || '',
        category: img.category || '',
        tags: (img.tags || []).join(', ')
      })
      setIsUpdate(true)
      setError('')
    } catch {
      setError('Failed to load image.')
    }
  }

  // Generate a unique random ID and set it in the form
  const handleGenerateId = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/images')
      const images = await res.json()
      let newId
      do {
        newId = Math.floor(100000 + Math.random() * 900000) // 6-digit random ID
      } while (images.some(img => String(img.id) === String(newId)))
      setForm({ ...form, id: newId })
    } catch {
      setError('Failed to generate ID.')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSuccess(false)
    setError('')
    try {
      if (isUpdate) {
        const res = await fetch(`http://localhost:5000/api/images/${form.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            img: form.img,
            title: form.title,
            description: form.description,
            category: form.category,
            tags: form.tags
          })
        })
        if (!res.ok) throw new Error('Failed to update image')
        setSuccess(true)
      } else {
        const res = await fetch('http://localhost:5000/api/images', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
        if (!res.ok) throw new Error('Failed to add image')
        setSuccess(true)
      }
      setForm({
        id: '',
        img: '',
        title: '',
        description: '',
        category: '',
        tags: ''
      })
      setIsUpdate(false)
    } catch (err) {
      setError('Failed to submit. Please try again.')
    }
  }

  const handleReset = () => {
    setForm({
      id: '',
      img: '',
      title: '',
      description: '',
      category: '',
      tags: ''
    })
    setSuccess(false)
    setError('')
    setIsUpdate(false)
  }

  const handlePasswordSubmit = e => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setPassword('')
    } else {
      setError('Incorrect password.')
    }
  }

  if (!authenticated) {
    return (
      <div className="admin-container">
        <h1 className="admin-title">Admin Login</h1>
        {error && <div className="admin-error">{error}</div>}
        <form onSubmit={handlePasswordSubmit} className="admin-form">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin: Add or Update Image</h1>
      {success && <div className="admin-success">{isUpdate ? "Image updated!" : "Image added!"}</div>}
      {error && <div className="admin-error">{error}</div>}
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-btn-row">
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={form.id}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <button type="button" onClick={handleLoad} style={{ minWidth: 90 }}>Load</button>
          <button type="button" onClick={handleGenerateId} style={{ minWidth: 90, background: "#eee", color: "#333" }}>Generate ID</button>
          <button type="button" onClick={handleReset} style={{ minWidth: 90, background: "#eee", color: "#333" }}>Reset</button>
        </div>
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
        />
        <button type="submit">{isUpdate ? "Update Image" : "Add Image"}</button>
      </form>
    </div>
  )
}