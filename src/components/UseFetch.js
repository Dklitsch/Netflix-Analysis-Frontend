import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    async function fetchData(options) {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);  
    }
  
    useEffect(() => {fetchData(options)},[url]);  return data;
  };

  export default useFetch;