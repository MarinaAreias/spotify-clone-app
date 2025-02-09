import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({title, Icon}){
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOptionIcon"/> }
            {Icon ? <h4> {title} </h4> : <p> {title} </p> }

        </div>
    );

}