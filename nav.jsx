import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

function Nav() {
    const navbar = React.useRef();
    const [isClicked, setIsClicked] = React.useState(false);

    const navToggle = () => {
        if (isClicked) {
            navbar.current.style.display = "none";
        } else {
            navbar.current.style.display = "flex";
        }
    };

    return (
        <nav>
            <i
                onClick={() => {
                    setIsClicked(!isClicked);
                    navToggle();
                }}
                id="hamburger"
                className={isClicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
            <ul ref={navbar} id="navbar">
                <Link to="/">
                    <li>Dashboard</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/register">
                    <li>Register</li>
                </Link>
                <li className="dropdown">
                    <span>Customer Functionalities</span>
                    <ul className="dropdown-content">
                        <Link to="/transaction">
                            <li>Transaction History</li>
                        </Link>
                        <Link to="/view">
                            <li>View All Beneficiaries</li>
                        </Link>
                        <Link to="/transfer">
                            <li>Transfer Money</li>
                        </Link>
                        <Link to="/edit-profile">
                            <li>Edit Profile</li>
                        </Link>
                    </ul>
                </li>
                <li className="dropdown">
                    <span>Admin Functionalities</span>
                    <ul className="dropdown-content">
                        <Link to="/view-customer">
                            <li>View Customer Details</li>
                        </Link>
                        <Link to="/account-opening">
                            <li>Account Opening</li>
                        </Link>
                        <Link to="/admin-transactions">
                            <li>View Transactions</li>
                        </Link>
                        <Link to="/perform-transactions">
                            <li>Perform Transactions</li>
                        </Link>
                    </ul>
                </li>
                
            </ul>
        </nav>
    );
}

export default Nav;