import dayjs from "dayjs";

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
    <div style={{ display: "flex" }}>
      {/* {day.moonphase === 0.5 && <img >} do each phase of moon w/ pic, conditional can also be in a range */}
      <p>
        {dayjs(`${day.datetime}T${day.moonrise}`).format(
          "ddd, MMMM D - hh:mm a"
        )}
        {day.moonphase === 0.5 && " - Full Moon"}
      </p>
      <button onClick={submit}>add to calendar</button>
    </div>
  );
}
