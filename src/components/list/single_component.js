import React from 'react';
import "./list_styles.css";
import { Link } from "react-router-dom";


export const Single = (props) => {
     let { name } = props;

     return (
          <div className="main">
               <h1 className="head">{name.title}</h1>
               <p className="sub">{name.content}</p>
               <Link className="goback" to="/">Go Back</Link>
          </div>
     )
}


