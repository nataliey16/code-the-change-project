import React, { useState, useEffect } from "react";

export default function Account(){
    //🐒
    const [data, setData] = useState([{}]);
    useEffect(() => {
        fetch("/acorn")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            console.log(data);
          });
      }, []);
    return(
        <div className="Account">
            <h1>Account</h1>
            <h2>{data.username}</h2>
            <h2>test - Hello/Goodbye world</h2>
        </div>
    )
}