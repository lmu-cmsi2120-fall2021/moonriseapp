import { useState } from "react";
import dayjs from "dayjs";
import Moonrise from "./Moonrise";

export default function MoonriseList({ user, days }) {
  return (
    <div className="rightColumn">
      <h1>Moonrise Times</h1>
      <div className="MoonriseList">
        {days
          .filter((day) => day.moonrise !== undefined)
          .filter((day) => day.moonrise > day.sunset)
          .map((day) => (
            <Moonrise user={user} key={day.datetime} day={day} />
          ))}
      </div>
    </div>
  );
}
