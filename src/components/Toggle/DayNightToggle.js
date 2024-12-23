
import React from "react";
import "./style.css";

export default function DayNightToggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`toggle${toggled==='dark' ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
}
