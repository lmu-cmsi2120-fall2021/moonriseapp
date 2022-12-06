import dayjs from "dayjs";

export default function Moonrise({ day }) {
  return (
    <p>
      {dayjs(day.datetime).format("ddd, MMMM D")}: {day.moonrise}
    </p>
  );
}
