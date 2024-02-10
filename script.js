document.addEventListener('DOMContentLoaded', () => {
  updateCountdown(); // Call the function initially
  setInterval(updateCountdown, 1000); // Update the countdown every second
});

function updateCountdown() {
  // Set the target date and time (June 10th at 14:56:18 Military time)
  const targetDate = moment('2024-06-10T14:56:18');

  // Get the current date and time
  const currentDate = moment();

  // Calculate the difference between the target and current date and time
  const duration = moment.duration(targetDate.diff(currentDate));

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  // Update the text content of the clock-timer elements
  document.querySelector('.clock-day').textContent = days;
  document.querySelector('.clock-hours').textContent = hours;
  document.querySelector('.clock-minutes').textContent = minutes;
  document.querySelector('.clock-seconds').textContent = seconds;
}
