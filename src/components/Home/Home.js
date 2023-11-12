// Home.js

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [workList, setWorkList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [featureProduct, setFeatureProduct] = useState([]);

  useEffect(() => {
    // Fetch work list data from home.json
    fetch('/database/home.json')
      .then((response) => response.json())
      .then((data) => setWorkList(data.workList));

    // Fetch counter data from home.json
    fetch('/database/home.json')
      .then((response) => response.json())
      .then((data) => setCounter(data.counter));

    // Fetch feature product data from home.json
    fetch('/database/home.json')
      .then((response) => response.json())
      .then((data) => setFeatureProduct(data.featureProduct));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>

      <div>
        <h3>Work List:</h3>
        <ul>
          {workList.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Increment Counter
        </button>
      </div>

      <div>
        <h3>Feature Product:</h3>
        <ul>
          {featureProduct.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
