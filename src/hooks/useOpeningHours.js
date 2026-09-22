import { siteConfig } from '../config/siteConfig';

export function useOpeningHours() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const isWeekend = day === 0 || day === 6;
  const schedule = isWeekend
    ? siteConfig.openingHours.weekends
    : siteConfig.openingHours.weekdays;

  const [openH, openM] = schedule.open.split(':').map(Number);
  const openMinutes = openH * 60 + openM;

  let closeMinutes;
  if (schedule.close === '00:00') {
    closeMinutes = 24 * 60; // midnight
  } else {
    const [closeH, closeM] = schedule.close.split(':').map(Number);
    closeMinutes = closeH * 60 + closeM;
  }

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[day];

  return {
    isOpen,
    dayName,
    schedule,
    isWeekend,
  };
}
