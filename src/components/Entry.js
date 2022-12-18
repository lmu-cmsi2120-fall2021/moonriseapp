import { useState } from "react";

export default function Entry({ getData }) {
  const [zip, setZip] = useState("");

  function submit(e) {
    e.preventDefault();
    getData(zip);
    setZip("");
  }

  return (
    <form className="entry" onSubmit={submit}>
      <input value={zip} onChange={(e) => setZip(e.target.value)} />
      <button type="submit">enter zipcode</button>
    </form>
  );
}
