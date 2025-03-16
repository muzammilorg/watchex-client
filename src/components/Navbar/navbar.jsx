import React from 'react'
import styles from './navbar.module.scss'
import logo from '../../assets/logos/logo.png'
import { NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/features/user.slice';
import { FaUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";




const Navbar = () => {

    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()

    const signOut = ()=> {
        dispatch(removeUser())
    }

    return (
        <>

            <nav className={`navbar navbar-expand-lg ${styles.app_navbar}`}>
                <div className={`container`}>
                    <NavLink to='/'>
                        <img src={logo} alt="watchex" className={`${styles.logo_img}`} />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><TiThMenu size={26} style={{color: "#6f3094"}} />                        </span>
                    </button>
                    <div className={`navbar-collapse collapse  ${styles.nav_container}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className={`${styles.navlink_item} nav-link active`}>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/showtimes' className={`${styles.navlink_item} nav-link active`}>Showtimes</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/about-us' className={`${styles.navlink_item} nav-link active`}>About Us</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/contact' className={`${styles.navlink_item} nav-link active`}>Contact</NavLink>
                            </li>





                        </ul>
                        <form className="d-flex" role="search">
                            <div className={`${styles.global_search_container} d-flex justify-content-center align-items-center`}>
                                <input type="text" className={`${styles.search_input} p-2`} placeholder='Search Movie' />
                                <IoIosSearch className={`${styles.search_icon}`} />

                            </div>
                        </form>
                        {
                            isLogin ?

                                <button onClick={signOut} className={`btn ${styles.sign_out_button} ms-lg-4 my-2 my-lg-0   d-flex justify-content-center align-items-center`} >
                                    <NavLink to='/' className={`${styles.sign_out_content} nav-link active`}>Sign Out</NavLink>
                                </button>


                                :

                                <button className={`btn ${styles.sign_in_button} ms-lg-4 my-2 my-lg-0   d-flex justify-content-center align-items-center`} >
                                    <NavLink to='/sign-in' className={`${styles.sign_in_content} nav-link active`}>Sign In</NavLink>
                                </button>


                        }

                        {isLogin ?
                        <div className={`${styles.shopping_cart} d-flex justify-content-center align-items-center`}>
                        <NavLink to={"/user"}>
                    <FaUserCircle 
                    size={28} 
                    style={{color: "#fff", cursor: "pointer",}} />
                    </NavLink>
                    </div>
                     : "" }
                        
                        
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar