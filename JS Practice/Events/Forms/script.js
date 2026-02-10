// let form = document.querySelector("form")
// let inputs  = document.querySelectorAll("input")
// let main = document.querySelector("#main")
// form.addEventListener("submit" ,function(e){
// e.preventDefault();
// // console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value)
// let card = document.createElement("div")
// card.classList.add("card")
// let profile = document.createElement("div")
// profile.classList.add("profile")
// let img = document.createElement("img")
// img.setAttribute("src",inputs[0].value)
// let h3 = document.createElement("h3")
// h3.textContent=inputs[1].value
// let h5 = document.createElement("h5")
// h5.textContent=inputs[2].value
// let p = document.createElement("p")
// p.textContent = inputs[3].value

// profile.appendChild(img);
// card.appendChild(profile)
// card.appendChild(h3)
// card.appendChild(h5)
// card.appendChild(p)
// main.appendChild(card)
// inputs.forEach(function(inp)
// {
// if(inp.type!=="submit")
// {
//   inp.value="";
// }
// })
// });



let nm = document.querySelector("#name")
let form = document.querySelector("form")
form.addEventListener("submit",function(dets){
  dets.preventDefault();
  if(nm.value.length<=2)
  {
document.querySelector("#hide").style.display="initial";
  }else{
    document.querySelector("#hide").style.display="none"
  }
})
