import React, {useState} from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/logo.svg"
import "../App.css"

export default function Menu () {
    const [show, setShow] = useState(false)

    function showMenu() {
        setShow(true)
    }
    function closeMenu() {
        setShow(false)
    }
    return (
        <div>
        <div className="header">
            <img src={logo} alt="Logo" className="logo"></img>
            <div className="menuBar">
            <h3>Menu <BiMenu className="open" onClick={showMenu}></BiMenu></h3>
            {
            show? <div className="menu">
               <BiX className="close" onClick={closeMenu}></BiX>
               <ol>Home</ol>
               <ol>Our Company</ol>
               <ol>Our Leadership</ol>
               <ol>Our Execution</ol>
               <ol>Local Expertise</ol>
               <ol>Work With Us</ol>
               <ol>Resource Centre</ol>
               <ol>Contact Us</ol>
            </div> : null
        }
            </div>
        </div>
        </div>
    )
}