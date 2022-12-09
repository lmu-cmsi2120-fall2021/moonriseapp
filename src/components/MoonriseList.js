import { useState } from "react";
import Moonrise from "./Moonrise";

export default function MoonriseList({ days }) {
  return (
    <div>
      <h1>Moonrise Times</h1>
      {days
        .filter((day) => day.moonrise !== undefined)
        .map((day) => (
          <Moonrise key={day.datetime} day={day} />
        ))}
    </div>
  );
}

// import { useState } from "react";
// import Moonrise from "./Moonrise";

// export default function MoonriseList({ days }) {
//   return (
//     <div>
//       <h1>Moonrise Times</h1>
//       {days
//         .filter((day) => day.moonrise !== undefined)
//         .map((day) => (
//           <Moonrise key={day.datetime} day={day} />
//         ))}
//     </div>
//   );
// }
