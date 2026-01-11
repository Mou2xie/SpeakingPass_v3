export function getCurrentSeason(): string {
  const month = new Date().getMonth(); // 0-11

  if (month >= 0 && month <= 3) {
    return "Jan - Apr";
  } else if (month >= 4 && month <= 7) {
    return "May - Aug";
  } else {
    return "Sep - Dec";
  }
}
