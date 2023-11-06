/* Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day. */

function isToday(inputDate) {
  const today = new Date();
  return (
    inputDate.getFullYear() === today.getFullYear() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getDate() === today.getDate()
  );
}