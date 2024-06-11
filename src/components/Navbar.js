import React, { useState } from 'react'
// import { a } from 'react-router-dom'

export const Navbar = (props) => {

    const [mode, setMode] = useState({
        color : "light",
        backgroundColor : "black"
    });


    const changeColor = ()=>{

        if(mode === "light"){
            setMode("dark")
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            
        }
        else{
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            setMode("light")
            
        }
    }

    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${mode === "light" ? "dark" : "light"} bg-${mode === "light" ? "dark" : "light"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-success">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>

                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={changeColor} />
                        <label className={`form-check-label text-${mode === "light" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Enable {mode === "light" ? "light" : "dark"} Mode</label>
                    </div>
                </div>
            </nav>

        </>
    )
}
