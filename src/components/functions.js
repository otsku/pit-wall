export const getRaceLength = (formData) => {
  return formData.trackLength * formData.laps;
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
