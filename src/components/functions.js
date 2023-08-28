export const getRaceLength = (formData) => {
  return formData.trackLength * formData.laps;
};

export const getRaceDuration = (formData) => {
  return lapTimeFromSeconds(
    lapTimeToSeconds(formData.normalLapTime) * formData.laps
  );
};

export const getFuelConsumption = (formData) => {
  return formData.normalFuelLap * formData.laps;
};

export const getRefuels = (formData) => {
  return (getFuelConsumption(formData) / formData.fuelLoadMax) | 0;
};

export const getPitTime = (formData) => {
  return formData.timeLoss * getRefuels(formData);
};

export const getMaxStint = (formData) => {
  return (formData.fuelLoadMax / formData.normalFuelLap) | 0;
};

export const handleLapTime = (minutes, seconds) => {
  const max = 59;
  const min = 0;
  if (seconds > max) {
    seconds = 0;
    minutes = minutes + 1;
  }
  if (seconds < min) {
    seconds = 59;
    minutes = minutes - 1;
  }
  if (minutes > max) {
    minutes = 0;
  }
  if (minutes < min) {
    minutes = 59;
  }
  return [minutes, seconds];
};

export const lapTimeToSeconds = (time) => {
  return parseInt(time[0]) * 60 + parseInt(time[1]);
};

export const lapTimeFromSeconds = (time) => {
  let minutes = (parseInt(time) / 60) | 0;
  let seconds = parseInt(time) - minutes * 60;
  return [minutes, seconds];
};
