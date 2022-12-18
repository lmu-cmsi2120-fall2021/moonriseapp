import { useState } from "react";

export default function HUD({ latitude, longitude, timezone }) {
  return (
    <div className="HUD">
      <h1>Location Data:</h1>
      <div className="HUDData">
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Timezone: {timezone}</p>
      </div>
    </div>
  );
}
