let currentCount = 3;
const intervalID = setInterval(() => {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
