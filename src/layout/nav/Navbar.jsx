import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import "./Navbar.scss"
import logo from "../../assets/logo.svg"
import { IoIosSearch } from "react-icons/io";
import { apiInstance } from '../../api/api';

const Navbar = () => {

    const [input, setInput] = useState("")
    const [searching, setSearching] = useState([])
    const [active, setActive] = useState(true)

    const searchProducts = (e) => {
        setInput(e.target.value)
        try {
            apiInstance(`https://api.escuelajs.co/api/v1/products/?title=${e.target.value}`)
                .then(res => {
                    setSearching(res.data);
                })

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <nav>
            <div className="nav__bar">
                <div className='nav__register'>
                    <div className="register">
                        <h1>Hi!</h1>
                        <Link className='link-log' to="/login">Sign In</Link>
                        <p>or</p>
                        <Link className='link-log' to="/signup">Register</Link>
                    </div>
                    <div className="help-contact">
                        <p>Daily Deals</p>
                        <p>Brand Outlet</p>
                        <p>Help & Contact</p>
                    </div>
                </div>
                <div className="sells">
                    <div>
                        <p>Sell</p>
                        <select>
                            <option value="watchList">Watchlist</option>
                        </select>
                        <select>
                            <option value="myEbay">My Ebay</option>
                        </select>
                    </div>
                    <FaRegBell className='icon' />
                    <BsCart2 className='icon' />
                </div>
            </div>
            <div className="nav__search">
                <img src={logo} alt="" />
                <form>
                    <select>
                        <option value="">Shop by category</option>
                    </select>
                    <div className="nav__search-div">
                        <IoIosSearch />
                        <input type="text" placeholder='Search for anything' onChange={searchProducts} />
                        {
                            active && <div className={searching.length > 5 && input.length > 0 ? "searching-active searching-max-l" : input.length > 0 ? "searching-active" : "searching-inactive"} >
                                {
                                    searching.map(e =>
                                        <Link to={`/single-page?id=${e.id}`}>
                                            <div className="searching-product" key={e.id}>
                                                <img src={e.images[0]} alt="" />
                                                <p>{e.title}</p>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        }
                        <select>
                            <option value="" >All Categories</option>
                        </select>
                    </div>
                    <button type='button'>Search</button>
                    <p>Advanced</p>
                </form>
            </div>
        </nav>
    )
}

export default Navbar