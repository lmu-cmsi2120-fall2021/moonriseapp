import dayjs from "dayjs";

export default function Moonrise({ day }) {
  return (
    <p>
      {dayjs(`${day.datetime}T${day.moonrise}`).format("ddd, MMMM D - hh:mm a")}
      {day.moonphase === 0.5 && " - Full Moon"}
    </p>
  );
}
