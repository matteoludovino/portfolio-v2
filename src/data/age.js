// Birth date: 6 December 2005. The age is computed in the visitor's browser on each visit,
// so the site never needs an edit on the birthday.
const BIRTH = { year: 2005, month: 12, day: 6 };

export function ageOn(date = new Date()) {
  const month = date.getMonth() + 1;
  const hadBirthday = month > BIRTH.month || (month === BIRTH.month && date.getDate() >= BIRTH.day);
  return date.getFullYear() - BIRTH.year - (hadBirthday ? 0 : 1);
}
