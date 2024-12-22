import { POLLING_SCHEDULE } from "../config";
import { Toast } from "bootstrap";

export const isWithinPollingSchedule = () => {
  if (!POLLING_SCHEDULE.enabled) return false;

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = new Date();

  const todaySchedule = POLLING_SCHEDULE.days[today] || [];
  return todaySchedule.some(({ start, end }) => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    const startTime = new Date();
    startTime.setHours(startHour, startMinute, 0, 0);

    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0);

    return currentTime >= startTime && currentTime <= endTime;
  });
};

export const initializeToast = (toastElementId) => {
  const toastEl = document.getElementById(toastElementId);
  if (toastEl) {
    const toast = new Toast(toastEl);
    toast.show();
  }
};
