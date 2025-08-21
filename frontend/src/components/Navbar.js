import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../assets/css/Navbar.css";

export const Navbar = () => {

    const [menubtn, setmenubtn] = useState(true)

    const hadleMenu = ()=>{
        setmenubtn(!menubtn);
        const navopen = document.getElementById('nav-mobile-menu');
        if (navopen.style.height === "100vh") {
            navopen.style.height = "0vh";
        } else {
            navopen.style.height = "100vh";
        }
    }
    const navigate = useNavigate();
    
    var searchquery = ""

    
    const handleSearch = (e) => {
        if (e && e.type === "keydown" && e.key !== "Enter") return;
        searchquery = document.getElementById('nav-search').value;
        document.getElementById('nav-search').value = ""
        navigate(`/search?${searchquery}`)

    }

  return (
    <>
        <nav>
            <div className='logo'>
                <h1>PixelNest</h1>
            </div>
            <div className='nav-searchbar'>
                <input type="text" placeholder='Search...' onKeyDown={handleSearch} id='nav-search' />
                <span class="material-symbols-outlined" id='nav-searchbtn' onClick={handleSearch} >search</span>
            </div>
            <div className='nav-links'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/about">About</Link>  
                <Link className='nav-link' to="/contact">Contact</Link>
            </div>

            


            {menubtn ? <span class="material-symbols-outlined menubtn" onClick={hadleMenu}>menu</span> : <span class="material-symbols-outlined menubtn" onClick={hadleMenu}>close</span>}


            
        </nav>
        <div className='nav-links-mobile' id='nav-mobile-menu'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/about">About</Link>  
                <Link className='nav-link' to="/terms">Terms and Conditions</Link>
        </div>
    </>
  )
}
