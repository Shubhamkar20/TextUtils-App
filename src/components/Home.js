import React, { useState } from "react";


export const Home = (props) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }


    const convertToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }


    // copy text function
    const copyText = () => {
        const alertDiv = document.createElement("div");
        alertDiv.role = "alert";

        if (text !== "") {
            navigator.clipboard.writeText(text);

            alertDiv.className = "alert alert-success alert-dismissible fade show";
            alertDiv.innerHTML = `<strong>Text Copied</strong>`
            console.log(text)
        }
        else {
            alertDiv.className = "alert alert-warning alert-dismissible fade show";
            alertDiv.innerHTML = "<strong>Please Enter Some Text</strong>";
        }

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.className = "btn-close"
        cancelButton.dataset.bsDismiss = "alert";
        document.getElementById("alertTextCopied").appendChild(alertDiv);
        document.querySelector(".alert").appendChild(cancelButton);
    }


    const reverseString = () => {
        let ch, newString = "";
        
        for (let i = 0; i < text.length; i++) {
            ch = text[i];
            newString = ch + newString;
        }

        setText(newString);

        console.log(newString)
    }


    const clearText = ()=>{
        setText("");
    }

    return (
        <>
            <div id="alertTextCopied"></div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" placeholder="Enter text here !!" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange}></textarea>

                <div className="btnGroup d-flex mt-4 flex-wrap">
                    <button type="button" className="btn btn-primary" onClick={convertToUpper}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={convertToLower}>Convert to lowercase</button>
                    <button type="button" className="btn btn-primary" onClick={copyText}>Copy Text</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
                    <button type="button" className="btn btn-primary" onClick={reverseString}>Reverse Text</button>


                </div>

                <div className="mt-5">
                    <span>{text.split(" ").length-1} word and {text.length} characters</span>
                </div>

                <div className="my-5">
                    <h3>PREVIEW</h3>
                    <div className="border border-success border-1 rounded p-4">
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        </>
    );
}