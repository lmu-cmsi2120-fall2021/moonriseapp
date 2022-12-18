import { useEffect, useState } from "react";
import { useAuthentication } from "../services/authService";
import "./App.css";
import Entry from "./Entry.js";
import MoonriseList from "./MoonriseList.js";
import Header from "./Header.js";
import HUD from "./HUD.js";

import dayjs from "dayjs";

export default function App() {
  const [data, setData] = useState(null);
  const user = useAuthentication();

  useEffect(() => {
    if (!user) {
      setData(null);
    }
  }, [user]);

  function getData(zip) {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/next60days?unitGroup=us&key=${process.env.REACT_APP_MOONRISE_KEY}&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Header user={user} />
      <div className="mainContent">
        <div className="leftColumn">
          <Entry getData={getData} />
          {data && (
            <HUD
              latitude={data.latitude}
              longitude={data.longitude}
              timezone={data.timezone}
            />
          )}
        </div>
        {data && <MoonriseList user={user} days={data.days} />}
      </div>
    </div>
  );
}
