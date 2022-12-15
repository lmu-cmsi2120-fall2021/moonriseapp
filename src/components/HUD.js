import { useState } from "react";

export default function HUD({ latitude, longitude, timezone }) {
  return (
    <div className="HUD">
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
}
