import React from "react";
import TemporaryDrawer from "./drawer";
import './styles.css';
import Button from "../Button";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar">
            <h1 className="logo">
                CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
            </h1>
            <div className="links">
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/compare">
                    <p className="link">Compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">Watchlist</p>
                </Link>
                <Link to="/dashboard">
                    <Button outlined={true} text={'Dashboard'}/>
                </Link>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header;