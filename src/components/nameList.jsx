import React, { useState, useEffect } from "react";

const NameList = (props) => {
    const [names, setNames] = useState([
        { name : "Pepper Potts", id : 1 },
        { name : "Micheal jones", id : 2 },
        { name : "maria sisily", id : 3 }
    ]);


    return(
        <div id="nameList">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    This is the names list
                </a>

                {names.map(name => {
                    return (<a href="#" key={name.id} className="list-group-item list-group-item-action">{name.name}</a>);
                })}
            </div>
        </div>
    );
}

export default NameList;