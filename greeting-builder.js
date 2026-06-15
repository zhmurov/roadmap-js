function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  return `Good ${timeOfDay}`;
}

function createGreeting(firstName, lastName, timeOfDay) {
  const greeting = getGreeting(timeOfDay);
  const fullName = formatName(firstName, lastName);
  return `${greeting}, ${fullName}`;
}
