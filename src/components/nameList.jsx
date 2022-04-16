import React, { useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = "sdfs";

const NameList = (props) => {
    // const [names, setNames] = useState([
    //     { name : "Pepper Potts", id : 1 },
    //     { name : "Micheal jones", id : 2 },
    //     { name : "maria sisily", id : 3 }
    // ]);

    const [names, setNames] = useState([]);

    const fetchData = React.useCallback(() => {
        axios({
            "method":"GET",
            "url":"http://localhost:5099/api/candidates/get"
        })
        .then((response) => {
            setNames(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[]);

    useEffect(() => {
        fetchData()
    },[fetchData]);

    return(
        <div id="nameList">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    This is the names list
                </a>

                {names.map(name => {
                    return (<a href="#" key={name.id} className="list-group-item list-group-item-action">{name.name} {name.phoneNumber} {name.comment}</a>);
                })}
            </div>
        </div>
    );
}

export default NameList;