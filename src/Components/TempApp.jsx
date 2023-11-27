import React, { useState, useEffect } from "react";
import "../Css/style.css";
export default function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a3d6077edf8dd1ea231c357fdb3be06b`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view icon"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel || Max : {city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
}
