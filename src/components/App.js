import { useEffect, useState } from "react";
import { useAuthentication } from "../services/authService";
import "./App.css";
import Entry from "./Entry.js";
import MoonriseList from "./MoonriseList.js";
import Header from "./Header.js";
import dayjs from "dayjs";

export default function App() {
  const [days, setDays] = useState([]);
  const user = useAuthentication();

  useEffect(() => {
    if (!user) {
      setDays([]);
    }
  }, [user]);

  function getDays(zip) {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/next30days?unitGroup=us&key=${process.env.REACT_APP_MOONRISE_KEY}&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setDays(data.days);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Header user={user} />
      <Entry getDays={getDays} />
      {days.length > 0 && <MoonriseList days={days} />}
    </div>
  );
}
