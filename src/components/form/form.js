import React, { useEffect, useState } from "react";
import {
  handleLapTime,
  lapTimeToSeconds,
  lapTimeFromSeconds,
} from "../functions.js";

const Form = ({ setFormData }) => {
  const [trackName, setTrackName] = useState("");
  const [trackLength, setTrackLength] = useState("");
  const [laps, setLaps] = useState("");
  const [normalFuelLap, setNormalFuelLap] = useState("");
  const [attackFuelLap, setAttackFuelLap] = useState("");
  const [fuelLoadMax, setFuelLoadMax] = useState("");
  const [fuelStart, setFuelStart] = useState("");
  const [normalLapTime, setNormalLapTime] = useState("");
  const [normalMinutes, setNormalMinutes] = useState(0);
  const [normalSeconds, setNormalSeconds] = useState(0);
  const [attackLapTime, setAttackLapTime] = useState("");
  const [normalTyreLife, setNormalTyreLife] = useState("");
  const [attackTyreLife, setAttackTyreLife] = useState("");
  const [timeLoss, setTimeLoss] = useState("");
  const [drivers, setDrivers] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newVal = {
      trackName: trackName,
      trackLength: trackLength,
      laps: laps,
      normalFuelLap: normalFuelLap,
      attackFuelLap: attackFuelLap,
      fuelLoadMax: fuelLoadMax,
      normalLapTime: normalLapTime,
      attackLapTime: attackLapTime,
      normalTyreLife: normalTyreLife,
      attackTyreLife: attackTyreLife,
      timeLoss: timeLoss,
      drivers: drivers,
    };
    setFormData(newVal);
  };

  useEffect(() => {
    let array = handleLapTime(normalMinutes, normalSeconds);
    setNormalMinutes(array[0]);
    setNormalSeconds(array[1]);
    setNormalLapTime(array);
  }, [normalMinutes, normalSeconds]);

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
          <td>Normal Fuel Consuption/Lap:</td>
          <td>
            <input
              type="text"
              value={normalFuelLap}
              onChange={(e) => setNormalFuelLap(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Attack Fuel Consuption/Lap:</td>
          <td>
            <input
              type="text"
              value={attackFuelLap}
              onChange={(e) => setAttackFuelLap(e.target.value)}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Max Fuel Load:</td>
          <td>
            <input
              type="text"
              value={fuelLoadMax}
              onChange={(e) => setFuelLoadMax(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Start Fuel Load:</td>
          <td>
            <input
              type="text"
              value={fuelStart}
              onChange={(e) => setFuelStart(e.target.value)}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Normal laptime:</td>
          <td>
            <input
              type="number"
              value={normalMinutes}
              onChange={(e) => setNormalMinutes(e.target.value)}
            />
            minutes
            <input
              type="number"
              value={normalSeconds}
              onChange={(e) => setNormalSeconds(e.target.value)}
            />
            seconds
          </td>
        </tr>
        <tr>
          <td>Attack laptime:</td>
          <td>
            <input
              type="text"
              value={attackLapTime}
              onChange={(e) => setAttackLapTime(e.target.value)}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Refuel time loss:</td>
          <td>
            <input
              type="text"
              value={timeLoss}
              onChange={(e) => setTimeLoss(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Normal tyre life:</td>
          <td>
            <input
              type="text"
              value={normalTyreLife}
              onChange={(e) => setNormalTyreLife(e.target.value)}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Attack tyre life:</td>
          <td>
            <input
              type="text"
              value={attackTyreLife}
              onChange={(e) => setAttackTyreLife(e.target.value)}
              disabled
            />
          </td>
        </tr>
        <tr>
          <td>Number of drivers:</td>
          <td>
            <input
              type="text"
              value={drivers}
              onChange={(e) => setDrivers(e.target.value)}
              disabled
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
};

export default Form;
