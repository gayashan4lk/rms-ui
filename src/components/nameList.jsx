import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NameList() {
  const [names, setNames] = useState([]);
  const [namesError, setNamesError] = useState();

  const fetchData = React.useCallback(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5099/api/candidates/get',
    })
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        setNamesError(error);
        // console.log(error)
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let pageView;
  if (namesError) {
    pageView = namesError;
  } else
    <div id="nameList">
      <div className="list-group">
        {names.map((name) => (
          <h5 key={name.id} className="list-group-item list-group-item-action">
            {name.name}
            {name.phoneNumber}
            {name.comment}
          </h5>
        ))}
      </div>
    </div>;

  return <div>{pageView}</div>;
}

export default NameList;
