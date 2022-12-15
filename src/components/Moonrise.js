import dayjs from "dayjs";

import newMoon from "../images/0_new.png";
import waxCresc from "../images/1_waxing_crescent.png";
import firstQuarter from "../images/2_first_quarter.png";
import waxGib from "../images/3_waxing_gibbous.png";
import fullMoon from "../images/4_full.png";
import wanGib from "../images/5_waning_gibbous.png";
import lastQuarter from "../images/6_last_quarter.png";
import wanCresc from "../images/waning_crescent.png";

export default function Moonrise({ day }) {
  function submit(e) {
    const endTime = dayjs(`${day.datetime}T${day.moonrise}`).add(20, "minute");
    const event = {
      eventName: "Moonrise",
      description: "Check out this moonrise",
      startTime: dayjs(`${day.datetime}T${day.moonrise}`).format(),
      endTime: endTime.format(),
    };
    fetch(
      "https://us-central1-moonriseapp-bb149.cloudfunctions.net/addEventToCalendar",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("From Firebase: ", data);
    // })
    // .catch((error) => console.log(error));
  }

  //   const jsonOutput = {
  //     eventName: "Moonrise",
  //     description: "Tonight's Moonrise",
  //     startTime: startTime.format(),
  //     endTime: endTime.format(),
  //   };
  //   // HELP - in above... rationale for when to use ${}
  // }

  return (
    <div className="MoonriseRow">
      {day.moonphase === 0 && (
        <img className="MoonphaseImage" src={newMoon} alt="new moon" />
      )}
      {day.moonphase > 0 && day.moonphase < 0.2 && (
        <img
          className="MoonphaseImage"
          src={waxCresc}
          alt="waxing crescent moon"
        />
      )}
      {day.moonphase >= 0.2 && day.moonphase <= 0.3 && (
        <img
          className="MoonphaseImage"
          src={firstQuarter}
          alt="first quarter moon"
        />
      )}
      {day.moonphase > 0.3 && day.moonphase < 0.48 && (
        <img
          className="MoonphaseImage"
          src={waxGib}
          alt="waxing gibbous moon"
        />
      )}
      {day.moonphase >= 0.48 && day.moonphase <= 0.52 && (
        <img className="MoonphaseImage" src={fullMoon} alt="full moon" />
      )}
      {day.moonphase > 0.52 && day.moonphase < 0.7 && (
        <img
          className="MoonphaseImage"
          src={wanGib}
          alt="waning gibbous moon"
        />
      )}
      {day.moonphase >= 0.7 && day.moonphase <= 0.8 && (
        <img
          className="MoonphaseImage"
          src={lastQuarter}
          alt="last quarter moon"
        />
      )}
      {day.moonphase <= 1 && day.moonphase > 0.8 && (
        <img
          className="MoonphaseImage"
          src={wanCresc}
          alt="last quarter moon"
        />
      )}
      <p className="MoonriseTime">
        {dayjs(`${day.datetime}T${day.moonrise}`).format(
          "ddd, MMMM D - hh:mm a"
        )}
        {day.moonphase === 0.5 && " - Full Moon"}
      </p>
      <button className="CalendarButton" onClick={submit}>
        add to calendar
      </button>
    </div>
  );
}
