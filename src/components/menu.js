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
        <>
        <header>
            <img src={logo} alt="Logo" className="logo"></img>
            <div className="menuBar">
            <h3>Menu <BiMenu className="open" onClick={showMenu}></BiMenu></h3>
            {
            show? <div className="menu">
               <BiX className="close" onClick={closeMenu}></BiX>
               <ol><a href="/">Home</a></ol>
               <ol><a href="https://www.floraison.in/our-company/">Our Company</a></ol>
               <ol><a href="https://www.floraison.in/our-leadership/">Our Leadership</a></ol>
               <ol><a href="https://www.floraison.in/our-execution/">Our Execution</a></ol>
               <ol><a href="https://www.floraison.in/local-expertise/">Local Expertise</a></ol>
               <ol><a href="https://www.floraison.in/work-with-us/">Work With Us</a></ol>
               <ol><a href="https://www.floraison.in/resource-center/">Resource Centre</a></ol>
               <ol><a href="https://www.floraison.in/contact-us/">Contact Us</a></ol>
            </div> : null
        }
            </div>
        </header>
        </>
    )
}