import React, { useState, useEffect } from 'react'
import data from "../assets/data/images.json"
import "../assets/css/Home.css"
import { Link } from 'react-router-dom'

export const Home = () => {
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState({})

  useEffect(() => {
    setImages(data)
  }, [])

  const handleimg = (img) => {
    return img ? img.replace("dl=0", "raw=1") : ""
  }

  const handleDownload = (img) => {
    return img ? img.replace("dl=0", "dl=1") : "#"
  }

  const handleImageLoad = (id) => {
    setLoaded(prev => ({ ...prev, [id]: true }))
  }

  return (
    <div className='home-container'>
      {
        images.map((item, idx) => {
          const imgId = item.id || idx
          return (
            <div className='home-items' key={imgId}>
              <div className="img-skeleton-wrapper">
                {!loaded[imgId] && (
                  <div className="img-skeleton" />
                )}
                <img
                  src={handleimg(item.img)}
                  alt={item.title}
                  className="gallery-img"
                  style={loaded[imgId] ? {} : { visibility: "hidden", position: "absolute", top: 0, left: 0 }}
                  onLoad={() => handleImageLoad(imgId)}
                />
              </div>
              <div className='home-item'>
                <h3>{item.title}</h3>
                <Link to={handleDownload(item.img)} className='home-downlaodbtn' download>Download</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}