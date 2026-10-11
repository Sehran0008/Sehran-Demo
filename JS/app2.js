 h1 = document.querySelector("h1");

 function changeColor(color, delay) {
    return new Promise((resolved, rejected) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                rejected("promise rejected");
            }
          h1.style.color = color;
          resolved("color changed!.");
     }, delay)
    });
 }

 async function demo() {
    try{
           await changeColor("red", 1000);
           await changeColor("orange", 1000);
           await changeColor("blue", 1000);
           await changeColor("pink", 1000);
           await changeColor("green", 1000);
    }

    catch(error){
        console.log("error caught");
        console.log(error);
    }

    let a = 5;
    console.log(a)
    console.log("new number = ", 5+a);
    
 }





// changeColor("red", 1000, () => {
//       changeColor("blue", 1000, () => {
//           changeColor("green", 1000, () => {
//               changeColor("orange",1000, () => {
//                   changeColor("pink",1000);
//               });
//           });
//          });

//   });

//   savetoDb(
//        "Sehran Shaikh",
//        () => {
//                console.log("Success: your data was saved");
//           },
//          () => {
//               console.log("Failure: weak connection. data not saved");
//           }
//        );


//    function savetoDb(data) {
//          return new Promise((resolved, rejected) => {
//          let internetSpeed = Math.floor(Math.random() * 10) + 1;
//      if(internetSpeed > 4) {
//          resolved("Success : data was saved");
//      } else {
//          rejected("failure : weak connection");
//      }

//          });
//      }

//      savetoDb("Sehran Shaikh")
//      .then( (result) => {
//          console.log("data1 saved.");
//          console.log(result);
//          return savetoDb("helloworld");
//           })

//          .then((result) => {
//              console.log("data2 saved");
//              console.log(result);
//              return savetoDb("Bussu");
//          })

//          .then( (result) => {
//              console.log("data3 saved");
//              console.log(result);
//          })

//      .catch( (error) => {
//          console.log("promise was rejected");
//          console.log(error);
//      });


// async function greet () {
//     throw "weak connection!";
//     return "Hello!";
    
// }

// greet ()

// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })

// .catch((err) => {
//     console.log("promise was rejected with err : ", err);
// })

// let demo = async() => {
//     return 5;
// }


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();    
//     await getNum();    
//     await getNum();    
// }