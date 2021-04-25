function currTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

let intervalID = setInterval(currTime, 1000);