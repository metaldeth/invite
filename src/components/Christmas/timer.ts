export const getTimer = () => {
  const now = new Date();
  const date = new Date(2023, 0, 1, 0, 0);

  const isStarted = now > date;

  const deltaMinutes = date.getMinutes() - now.getMinutes();
  const deltaHours = date.getHours() - now.getHours() - (deltaMinutes < 0 ? 1 : 0);
  const deltaDay = date.getDate() - now.getDate() - (deltaHours < 0 ? 1 : 0);
  const deltaMonth = date.getMonth() - now.getMonth() - (deltaDay < 0 ? 1 : 0);

  const month = Math.floor(deltaMonth < 0 ? 12 + deltaMonth : deltaMonth);
  const day = Math.floor(deltaDay < 0 ? 31 + deltaDay : deltaDay);
  const hours = Math.floor(deltaHours < 0 ? 24 + deltaHours : deltaHours);
  const minute = Math.floor(deltaMinutes < 0 ? 60 + deltaMinutes : deltaMinutes);

  return isStarted ? {
    month: 0,
    day: 0,
    hours: 0,
    minute: 0
  } : {
    month,
    day,
    hours,
    minute,
  }
}