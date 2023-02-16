import React, { useEffect, useState } from "react";

function Form() {
  const [trackName, setTrackName] = useState("");
  const [trackLength, setTrackLength] = useState("");
  const [laps, setLaps] = useState("");
  const [fuelLap, setFuelLap] = useState("");
  const [fuelMax, setFuelMax] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Track: " +
        trackName +
        "\nLength: " +
        trackLength +
        "\nLaps: " +
        laps +
        "\nFuel/lap: " +
        fuelLap +
        "\nMax Fuel: " +
        fuelMax
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>Track Name:</td>
          <td>
            <input
              type="text"
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Track Length:</td>
          <td>
            <input
              type="text"
              value={trackLength}
              onChange={(e) => setTrackLength(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Number of Laps:</td>
          <td>
            <input
              type="text"
              value={laps}
              onChange={(e) => setLaps(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Fuel Consuption/Lap:</td>
          <td>
            <input
              type="text"
              value={fuelLap}
              onChange={(e) => setFuelLap(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Max Fuel Load:</td>
          <td>
            <input
              type="text"
              value={fuelMax}
              onChange={(e) => setFuelMax(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
      </table>
    </form>
  );
}

export default Form;
