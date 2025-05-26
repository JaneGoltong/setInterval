// 1. Simulate a download notification. It should tell the user that "Download will start shortly", and after 5 seconds, it should tell the user "Download has started..."
// 2. Create a countdown timer. Given a timer, you should count down till it gets to zero.
//  let counter = 0;

// const interval = setInterval(() => {
//   if (counter < 5) {
//     console.log("Download will start shortly...");
//     counter++;
//   }

//   if (counter === 5) {
//     clearInterval(interval);
//     console.log("Download has started...");
//   }
// }, 1000);


// console.log("Download will start shortly...");

// setTimeout(() => {
//   console.log("Download has started...");
// }, 5000); // runs after 5 seconds

// Create a countdown timer. Given a timer, you should count down till it gets to zero.

let timeLeft = 10;

const countdown = setInterval(() =>{
    console.log(`timeLeft ${timeLeft} seconds`)
    timeLeft--;
    if(timeLeft<0){
        clearInterval(countdown)
        console.log('countdown complete!!!')
    }
})

