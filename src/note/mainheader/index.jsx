import React from "react";
import Rightside from "./rightside";
import Leftheader from "./leftside";
import "./index.css";



const Mainheader = () => {
    return (
        <div className="main">
            <div>
                <Rightside />
            </div>
            <div>
                <Leftheader/>
            </div>
        </div>
    )
}

export default Mainheader;