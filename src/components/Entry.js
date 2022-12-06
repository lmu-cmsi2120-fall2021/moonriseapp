import { useState } from "react";

export default function Entry({ getDays }) {
  const [zip, setZip] = useState("");

  function submit(e) {
    e.preventDefault();
    getDays(zip);
    setZip("");
  }

  return (
    <form onSubmit={submit}>
      <input value={zip} onChange={(e) => setZip(e.target.value)} />
      <button type="submit">enter zipcode</button>
    </form>
  );
}
