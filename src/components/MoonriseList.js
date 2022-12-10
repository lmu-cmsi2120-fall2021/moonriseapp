import { useState } from "react";
import Moonrise from "./Moonrise";

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
    </div>
  );
}
