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





// Now we will reverse this by using capturing it will start form outer to innner btn->c->b->a we will reverse this a->b->c->btn by using capture phase
//Event capturing example


 let a = document.querySelector(".a")
     let b = document.querySelector(".b")
   let c = document.querySelector(".c")
    let btn = document.querySelector("button")
    btn.addEventListener("click",function (){
      console.log("Button clicked");
    })
     btn.addEventListener("click",function (){
      console.log("Button clicked");
    })
     c.addEventListener("click",function (){
      console.log("c clicked");
    },true)
     b.addEventListener("click",function (){
      console.log("b clicked");
    },true)
     a.addEventListener("click",function (){
      console.log("a clicked");
    },true//capture phase on by true
    )//now when we click on button stille a clicked will run first 
