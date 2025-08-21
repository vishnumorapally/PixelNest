import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import data from "../assets/data/images.json"
import "../assets/css/SearchResults.css"

export const SearchResults = () => {

    const params = useLocation();
    const searchquery = params.search.replace("?","").replaceAll("%20"," ");

    const handleimg = (img)=>{
    return img.replace("dl=0","raw=1")
  }

  const handleDownload = (img) => {
    
    return img.replace("dl=0", "dl=1");
    
  }

  return (
    <div className='SearchResults-container'>
        <h1>Search Results</h1>
        <p>Display search results here for {searchquery}.</p>
        <div className='SearchResults-content'>
        {
            data.filter(item => item.title.toLowerCase().includes(searchquery.toLowerCase()) || item.description.toLowerCase().includes(searchquery.toLowerCase()) || item.category.toLowerCase().includes(searchquery.toLowerCase())).length > 0 ? ( 
                data.filter(item => item.title.toLowerCase().includes(searchquery.toLowerCase()) || item.description.toLowerCase().includes(searchquery.toLowerCase()) || item.category.toLowerCase().includes(searchquery.toLowerCase())  )
                .map((item)=> (
                    <div>
                        {
                            <div className='search-content'>
                                <img className='search-img' src={item.img.replace("dl=0", "raw=1")}/>
                                <div className='search-options'>
                                    <h1>{item.title}</h1>
                                    <div className='seach-tags'>
                                        {   
                                            item.tags.map((items)=>(
                                                <span>{items}</span>
                                            ))
                                        }
                                    </div>
                                    <Link to={handleDownload(item.img)} className='search-downlaodbtn' download>Download</Link>
                                </div>
                            </div>

                        }
                    </div>
                )))
             : (
                <h1>No Results found</h1>
            )
        }
        </div>
    </div>
  )
}
