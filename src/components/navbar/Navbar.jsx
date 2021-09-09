import React from "react";
import styles from "./Navbar.module.css";


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
            <h1 className={styles.navbar_heading}>Nilgiri Hostel</h1>
            {(toggleMenu || screenWidth>900) && (
            <ul className={styles.navbar_menu}>
                <li className={styles.navbar_item}>
                    <a className={styles.navbar_link} href="#about">About Us</a>
                </li>
                <li className={styles.navbar_item}>
                    <a className={styles.navbar_link} href="#team">Our Team</a>
                </li>
                <li className={styles.navbar_item}>
                    <a className={styles.navbar_link} href="#calendar">Calendar</a>
                </li>
                <li className={styles.navbar_item}>
                    <a className={styles.navbar_link} href="#contact">Contact Us</a>
                </li>
                <li className={styles.navbar_item}>
                    <a className={styles.navbar_link} href="#family">Family</a>
                </li>
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