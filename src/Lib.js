export function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export function randomIndex(list) {
  return randomInt(list.length);
}
function getMuscleWeights(workoutLog) {
  // Initialize an empty array to store muscle weights
  const muscleWeights = [];
  // Loop through each exercise in the workout log
  for (let i = 0; i < workoutLog.length; i++) {
    // Get the exercise
    const exercise = workoutLog[i];
    // Loop through each muscle in the exercise
    for (let j = 0; j < exercise.muscles.length; j++) {
      // Get the muscle
      const muscle = exercise.muscles[j];
      // Add the muscle weight to the array
      muscleWeights.push(muscle.weight);
    }
  }
  return muscleWeights;
}

export function formatDate(date = new Date()) {
  date = getValidDate(date);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
}

export function isDateEqual(date1, date2, source = "unknown") {
  date1 = getValidDate(date1);
  date2 = getValidDate(date2);
  if (source == "AgendaModel") {
    console.log([
      `${source}::isDateEqual`,
      date1,
      date2,
      (
        date1.getUTCFullYear() == date2.getUTCFullYear() &&
        date1.getUTCMonth() == date2.getUTCMonth() &&
        date1.getUTCDate() == date2.getUTCDate()
      )
    ]);
  }

  return (
    date1.getUTCFullYear() == date2.getUTCFullYear() &&
    date1.getUTCMonth() == date2.getUTCMonth() &&
    date1.getUTCDate() == date2.getUTCDate()
  );
}

export function randomElement(list) {
  return list[randomIndex(list)];
}

export function randomId() {
  return Math.random().toString(36).substring(2, 15);
}

export function validateSetsNbr(nbr) {
  if (!/^\d+$/.test(nbr)) {
    // The string is not a positive integer
    return 1;
  }
  const num = parseInt(nbr, 10);
  return num <= 0 ? 5 : num > 99 ? 99 : num;
}

export function validateSetsWeight(weight) {
  if (!/^\d+$/.test(weight)) {
    // The string is not a positive integer
    return 5;
  }
  const weightParse = parseInt(weight, 10);
  return weightParse <= 0 ? 5 : weightParse > 200 ? 200 : weightParse;
}

export function getDaysOfWeek(date) {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dayOfWeek = date.getUTCDay();
  const week = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(date);
    currentDate.setDate(date.getUTCDate() - dayOfWeek + i);
    const day = `${days[i]} - ${currentDate.getUTCDate()} / ${
      currentDate.getUTCMonth() + 1
    }`;
    week.push(day);
  }
  return week;
}

export function getValidDate(date) {
  if (!date instanceof Date || isNaN(date)) {
    date = new Date(date);
    if (isNaN(date)) {
      date = new Date();
    }
  }
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function getShortFormaDate(date) {
  date = getValidDate(date);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayName = days[date.getUTCDay()];
  let mm = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  let dd = ("0" + date.getUTCDate()).slice(-2);
  return `${dayName} ${dd}/${mm}`;
}

export function getLastSevenDays(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    lastSevenDays = [];
  let currentDate, dayName, mm, dd;

  for (let i = 0; i < 7; i++) {
    currentDate = new Date(date);
    currentDate.setDate(date.getUTCDate() - i);

    dayName = days[currentDate.getUTCDay()];
    mm = ("0" + (currentDate.getUTCMonth() + 1)).slice(-2);
    dd = ("0" + currentDate.getUTCDate()).slice(-2);

    lastSevenDays.push(`${dayName} ${mm}/${dd}`);
  }

  return lastSevenDays;
}

export function getAdjustedDate(date, nbrDay = 0) {
  date = getValidDate(date);
  return new Date(date.getTime() + nbrDay * 24 * 60 * 60 * 1000);
}

export function getDatesOfWeek(date) {
  date = getValidDate(date);
  const startOfWeek = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate() - date.getUTCDay()
  );
  const endOfWeek = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate() + (6 - date.getUTCDay())
  );
  const dates = [];

  for (let i = startOfWeek; i <= endOfWeek; i.setDate(i.getUTCDate() + 1)) {
    dates.push(new Date(i));
  }

  return dates;
}

function getMuscleNames(workoutLog) {
  // Initialize an empty array to store muscle names
  const muscleNames = [];

  // Iterate over the workout log
  for (let i = 0; i < workoutLog.length; i++) {
    const muscles = workoutLog[i].muscles;
    // Iterate over the muscles for each day
    for (let j = 0; j < muscles.length; j++) {
      // Push the muscle name to the array
      muscleNames.push(muscles[j].name);
    }
  }

  // Return the array of muscle names
  return muscleNames;
}
