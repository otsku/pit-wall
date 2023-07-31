import React, { useState } from "react";
import {
  getRaceLength,
  getFuelConsumption,
  getRefuels,
  getPitTime,
  getMaxStint,
} from "../functions.js";

const Table = ({ formData }) => {
  if (formData === "") {
    return <p>Please fill in race information</p>;
  }
  return (
    <table>
      <tr>
        <td>Track name</td>
        <td>{formData.trackName}</td>
      </tr>
      <tr>
        <td>Track Lenght</td>
        <td>{formData.trackLength} Km</td>
      </tr>
      <tr>
        <td>Race laps</td>
        <td>{formData.laps} Laps</td>
      </tr>
      <tr>
        <td>Race Lenght</td>
        <td>{getRaceLength(formData)} Km</td>
      </tr>
      <tr>
        <td>Race Fuel Consuption</td>
        <td>{getFuelConsumption(formData)} L</td>
      </tr>
      <tr>
        <td>Refuels required</td>
        <td>{getRefuels(formData)} stops</td>
      </tr>
      <tr>
        <td>Pit time</td>
        <td>{getPitTime(formData)} seconds</td>
      </tr>
      <tr>
        <td>Max Laps on stint</td>
        <td>{getMaxStint(formData)} Laps</td>
      </tr>
    </table>
  );
};

export default Table;
