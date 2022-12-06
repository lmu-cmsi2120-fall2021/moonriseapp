import { useEffect, useState } from "react";
import { useAuthentication } from "../services/authService";
import "./App.css";
import Entry from "./Entry.js";
import MoonriseList from "./MoonriseList.js";
import Header from "./Header.js";

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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?unitGroup=us&key=ZLZX6F2H4E7PLK9PNFHA46KBC&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setDays(data.days);
        console.log(data);
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
