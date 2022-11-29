import React from "react";
import styles from "./Navbar.module.css";
import "./navbar.css"
import {Link} from "react-router-dom";
import pic from './logo-removedbg.png';

function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false)

    function ChangeToggleMenu() {
        return setToggleMenu(!toggleMenu);
    }

    const navbarClass = toggleMenu ? 'navbarLOLactive' : '';

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_background}></div>
            <Link className={styles.react_router_link_heading} to="/">
                <img id={styles.logo} src={pic} alt="logo" height='80px' width='110px'/>
                <h1 className={styles.navbar_heading}>NILGIRI</h1>
            </Link>
            
            <ul className={`${styles.navbar_menu} ${navbarClass}`}>
            {/* <ul className="navbar_menu navbarLOLactive"> */}
                <Link className={styles.react_router_link_item} to="/">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>
                        <p className={styles.navbar_itemlol}>Home</p>
                    </li>
                </Link>
                <Link className={styles.react_router_link_item} to="/team">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>
                        <p className={styles.navbar_itemlol}>Team</p>
                    </li>
                </Link>
                <Link className={styles.react_router_link_item} to="/gallery">
                    <li className={styles.navbar_item} onClick={ChangeToggleMenu}>
                        <p className={styles.navbar_itemlol}>Gallery</p>
                    </li>
                </Link>
                {/* <Link className={react_router_link_item} to="/noticeboard">
                    <li className={navbar_item} onClick={ChangeToggleMenu}>Notice Board</li>
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLVjpieSUCgByssFVMTrqtFYtrETk6gGz-BbwV8hmxukw86A/viewform" target="_blank" rel="noreferrer">
                    <li className={navbar_item} onClick={ChangeToggleMenu}>Complaint Form</li>
                </a> */}
            </ul>
            
            <div className={styles.btn} onClick={ChangeToggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    );
}

export default Navbar;