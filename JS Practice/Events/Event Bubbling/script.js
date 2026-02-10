// event will move to parent if there is not event at current
//here button do not have any event listener b ut parent tag nav has the so it move to parent as we click on button but still event happen of parent element
// document.querySelector("#nav").addEventListener('click',function(){
//   alert('clicked')
// })

// here button do not have any click event but its parent has so when we click on button its parent event triggers




// Now we have 5 lis but we will not put 5 event listener on all lis we will add one event listener on parent only


//or  agr child ke pass apna event listener hua to wahi chlega lekin uske bad parent ka b chlega uske parent ka b chlega agr hoga 


let ul = document.querySelector("ul");
let li = document.querySelectorAll("li")
ul.addEventListener("click",function(dets){
dets.target.classList.toggle("lt")
});

li.forEach(function(item){
  item.addEventListener("click",function(){alert("li clicked")})
})


//Event bublling example
//  let a = document.querySelector(".a")
//      let b = document.querySelector(".b")
//    let c = document.querySelector(".c")
//     let btn = document.querySelector("button")
//     btn.addEventListener("click",function (){
//       console.log("Button clicked");
//     })
//      btn.addEventListener("click",function (){
//       console.log("Button clicked");
//     })
//      c.addEventListener("click",function (){
//       console.log("c clicked");
//     })
//      b.addEventListener("click",function (){
//       console.log("b clicked");
//     })
//      a.addEventListener("click",function (){
//       console.log("a clicked");
//     })
