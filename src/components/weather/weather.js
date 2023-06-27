import "./weather.css";
import React from "react";
import weatherIcon from '../Icons/weather.jpeg'
import Location_Icons from "../Icons/Location.png";
import { useEffect, useState } from "react";
import Input from "../Input/input";
const Weather = (props) => {
  const Apikey = "5b0d11e80f018b1dd886580bac17445d";
  const [Data, setData] = useState("");
  const [EnteredInput, SetEnterInput] = useState("");

  const InputChangeHanler = (e) => {
    SetEnterInput(e.target.value);
  };
  const SearchHanler = (e) => {
    if (EnteredInput.trim() === "") {
      alert("Please Enter The City Name");
    } else {
      Fetchdata(EnteredInput);
    }
  };

  const Fetchdata = async (cityName) => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        Apikey
    );

    const Data = await response.json();

    if (!response.ok) {
      alert("Please Enter  A Valid Input");
    }

    setData(Data);


  };
  useEffect(() => {
    Fetchdata("jhunjhunu");
  }, []);

  return (
    <>
      <div className="Wraper">
        <div className="image">
          <div className="icon"><img src={weatherIcon} className='weathrtIcon' alt='weatherIcon'/></div>
          <Input
            value={EnteredInput}
            onInputChangeHandler={InputChangeHanler}
            onSearchHanler={SearchHanler}
          />
        </div>
        <div className="weather-detail">
          <p>Country : {Data?.sys?.country}</p>
          <h1>
            <img src={Location_Icons} alt="location" className="Location" />{" "}
            {Data?.name}
          </h1>
          <h1>{(Data?.main?.temp - 273.15).toFixed()}°C

   
          </h1>
          <p>humidity : {Data?.main?.humidity} %</p>
         

          <h2> Wind Speed : {(Data?.wind?.speed * 3.6).toFixed()}km/h </h2>
        </div>
      </div>
    </>
  );
};

export default Weather;
