export function getHoursFromDate(hours: string) {
  const splitedHours = hours.split("T");
  const hoursContent = splitedHours[1].split(":");

  return `${hoursContent[0]}:${hoursContent[1]}`;
}
