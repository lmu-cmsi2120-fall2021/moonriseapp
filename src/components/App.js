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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}?unitGroup=us&key=ZLZX6F2H4E7PLK9PNFHA46KBC&elements=datetime,moonphase,sunrise,sunset,moonrise,moonset&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        const moonrises = addDays(data.days);
        setDays(moonrises);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function addDays(dayArray) {
    // create additional days
    // do math and add moonrise
    const moonrises = [];
    let day = dayArray[0];
    if (day) {
      moonrises.push(day);
      for (let i = 0; i < 364; i++) {
        const moonriseTime = dayjs(`${day.datetime}T${day.moonrise}`)
          .add(50, "minute")
          .format("hh:mm:ss");
        const newDate = dayjs(day.datetime).add(1, "day").format("YYYY-MM-DD");
        const newDay = {
          datetime: newDate,
          moonrise: moonriseTime,
        };
        day = newDay;
        moonrises.push(newDay);
      }
      console.log("AddDays: ", moonrises);
      return moonrises;
    }
  }

  addDays(days);

  return (
    <div className="App">
      <Header user={user} />
      <Entry getDays={getDays} />
      {days.length > 0 && <MoonriseList days={days} />}
    </div>
  );
}
