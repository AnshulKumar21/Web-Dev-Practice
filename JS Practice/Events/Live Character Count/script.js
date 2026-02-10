let inp = document.querySelector("input")
let count = document.querySelector("#count")
let left = document.querySelector("#left")
inp.addEventListener("input",function(){
  console.log(inp.value.length);
  count.textContent = inp.value.length
  let leftcount = 20-inp.value.length;
    left.textContent = leftcount;
  if(leftcount<0)
  {
  
    left.style.color ="red";
  }else{
   
    left.style.color ="black";
  }

})