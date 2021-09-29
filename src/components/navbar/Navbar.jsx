import React from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)

    function ChangeToggleMenu() {
        return setToggleMenu(!toggleMenu);
    }

    const navbarClass = toggleMenu ? styles.active : '';

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_background}></div>
            <Link className={styles.react_router_link_heading} to="/">
                <h1 className={styles.navbar_heading}>NILGIRI HOSTEL</h1>
            </Link>
            {(
            <ul className={`${styles.navbar_menu} ${navbarClass}`}>
                <Link className={styles.react_router_link_item} to="/">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>Home</li>
                </Link>
                <Link className={styles.react_router_link_item} to="/team">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>Our Team</li>
                </Link>
                <Link className={styles.react_router_link_item} to="/gallery">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>Gallery</li>
                </Link>
                <Link className={styles.react_router_link_item} to="/noticeboard">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>Notice Board</li>
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLVjpieSUCgByssFVMTrqtFYtrETk6gGz-BbwV8hmxukw86A/viewform" target="_blank" rel="noreferrer">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>Complaint Form</li>
                </a>
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