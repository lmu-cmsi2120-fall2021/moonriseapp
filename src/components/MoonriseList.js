import { useState } from "react";
import dayjs from "dayjs";
import Moonrise from "./Moonrise";

function submit(e) {
  e.preventDefault();

  // do same sort of processing on days as below >> write helper function to handle both?
  // parse each entry into google firebase format:
  const event = {
    eventName: "Firebase Event",
    description: "This is a sample description",
    startTime: "2018-12-01T10:00:00",
    endTime: "2018-12-01T13:00:00",
  };
  // call firebase function >>
}

// function parseDay(day) {
//   startTime = dayjs(`${day.datetime}T${day.moonrise}`);
//   endTime = dayjs(startTime).add(20, "minute");

//   const jsonOutput = {
//     eventName: "Moonrise",
//     description: "Tonight's Moonrise",
//     startTime: startTime.format(),
//     endTime: endTime.format(),
//   };
//   // HELP - in above... rationale for when to use ${}
// }

export default function MoonriseList({ days }) {
  return (
    <div>
      <h1>Moonrise Times</h1>
      {days
        .filter((day) => day.moonrise !== undefined)
        .filter((day) => day.moonrise > day.sunset)
        .map((day) => (
          <Moonrise key={day.datetime} day={day} />
        ))}
      <form onSubmit={submit}>
        <button type="submit">add to calendar</button>
      </form>
      {/* HELP - why didn't it like in separate divs? */}
    </div>
  );
}
