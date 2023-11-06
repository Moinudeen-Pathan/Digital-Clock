 'use strict'
let clk = document.querySelector("#clock");
let h = document.querySelector("#hour");
let m = document.querySelector("#minute");
let s = document.querySelector("#second");
// let ms = document.querySelector("#millisecond");
setInterval(() => {
  let date = new Date();
  h.innerHTML = date.getHours().toString().padStart(2, "0");
  m.innerHTML = date.getMinutes().toString().padStart(2, "0");
  s.innerHTML = date.getSeconds().toString().padStart(2, "0");
  // ms.innerHTML = date
  //   .getMilliseconds()
  //   .toString()
  //   .padStart(3, "0")
  //   .substring(0, 2);
  /*   console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds()); */
}, 1);
 