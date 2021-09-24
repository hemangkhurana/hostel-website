import React from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    React.useEffect(function() {
        function changeWidth () {
            return setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return (function() {
            return window.removeEventListener('resize', changeWidth)
        })
    }, [])

    function ChangeToggleMenu() {
        return setToggleMenu(!toggleMenu);
    }

    function onClickToggle() {
        return setToggleMenu(false);
    }

    return (
        <div className={styles.navbar}>
            <Link className={styles.react_router_link_heading} to="/">
                <h1 className={styles.navbar_heading}>Nilgiri Hostel</h1>
            </Link>
            {(toggleMenu || screenWidth>1100) && (
            <ul className={styles.navbar_menu}>
                <Link className={styles.react_router_link_item} to="/">
                    <li className={styles.navbar_item}>Home</li>
                </Link>
                <Link className={styles.react_router_link_item} to="/team">
                    <li className={styles.navbar_item}>Our Team</li>
                </Link>
                <Link className={styles.react_router_link_item} to="/Gallery">
                    <li className={styles.navbar_item}>Gallery</li>
                </Link>
                <li className={styles.navbar_item}>Notice Board</li>
                <li className={styles.navbar_item}>Complaint Form</li>
            </ul>
            )}
            <div className={styles.btn} onClick={ChangeToggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    );
}

export default Navbar;