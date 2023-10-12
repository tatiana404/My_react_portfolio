import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavMenu.module.css";



export default function NavMenu() {
  return (
    <div className = {classes.nav} >
      <ul>
        <li>
          <NavLink to ="/" >ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to ="/Portfolio">PORTFOLIO</NavLink>
        </li>
        <li>
           <NavLink to ="/Contact">CONTACT</NavLink>
        </li>
         <li>
            <NavLink to ="/Resume">RESUME</NavLink>
        </li>
      </ul>
    </div>
  );
}
