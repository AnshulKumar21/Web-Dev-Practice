// let count = 10;
// let interval = setInterval(function(){
// if(count>=1){
// console.log(count);
// count--;
// }else{
//   clearInterval(interval)
// }

// },1000)

let count = 0;
 let progress = document.querySelector(".progress-box")
  let percenttext = document.querySelector("#percentText")
  let btn = document.querySelector("#startBtn")
  btn.addEventListener("click",function(){
setInterval(function(){
  if(count<100){
    count++;
  progress.style.width = `${count}%`
  percenttext.textContent = `${count}%`
  }else{
    btn.textContent = "Downloaded"
  }
},30)})