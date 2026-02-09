//input event listener


// let inp = document.querySelector("input");
//  inp.addEventListener("input",function(det){
//   if(det.data!==null) 
//     {
//       console.log(det.data)
//     };
//  })
//  console.log("hello") 


//Change event 
let sel = document.querySelector("select")
let head = document.querySelector("#s")

sel.addEventListener("change",function(dets)
{
head.textContent = `${dets.target.value} Device  is selected`
})
console.log