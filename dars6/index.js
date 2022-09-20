// let oy ="dekabr";
// let winter='qish';
// let spring='bahor';
// let summer='yoz';
// let autumn='kuz';
// if(oy=='yanvar'){
// console.log(`birinchi oy ${winter} fasli`)
// }
// else if(oy=='fevral'){
//     console.log(`ikkinchi oy ${winter} fasli`) 
// }
// else if(oy=='mart'){
//     console.log(`uchinchi oy ${spring} fasli`) 
// }
// else if(oy=='aprel'){
//     console.log(`tortinchi oy ${spring} fasli`) 
// }
// else if(oy=='may'){
//     console.log(`beshinchi oy ${spring} fasli`) 
// }else if(oy=='iyun'){
//     console.log(`oltinchi oy ${summer} fasli`) 
// }
// else if(oy=='iyul'){
//     console.log(`yettinchi oy ${summer} fasli`) 
// }else if(oy=='avgust'){
//     console.log(`sakkizinchi oy ${spring} fasli`) 
// }
// else if(oy=='sentabr'){
//     console.log(`toqqizinchi oy ${autumn} fasli`) 
// }
// else if(oy=='oktabr'){
//     console.log(`oninnchi oy ${autumn} fasli`) 
// }
// else if(oy=='noyabrbr'){
//     console.log(`onbirinchi oy ${autumn} fasli`) 
// }else if(oy=='dekabr'){
//     console.log(`onikkinchi oy ${winter} fasli`) 
// }



///////////////// Math.abs 

// function module(x) {
//   let result;
//   x < 0 && (result = x * -1);
//   x > 0 && (result = x);
//   console.log(result);
//   return result;
// }
// module(-34);

///////// Math.round 

// function round(x) {
//   let number = x.toString().split(".")[0];
//   let residual = x.toFixed(1).slice(-1);
//   let result;
//   if (residual < 5) {
//     residual = 0;
//     result = Number(number) + Number(residual);
//   } else if (residual >= 5) {
//     residual = 1;
//     result = Number(number) + Number(residual);
//   }
//   console.log(result);
//   return result;
// }

// round(1235.5234542315);

/////////////// Math.floor 

// function floor(x) {
//   let number = x.toString().split(".")[0];
//   let minus = x.toString().split("-");
//   let residual = x.toString().split(".")[1];
//   let result;
//   if ((minus[0] === "" && residual == 0) || residual == undefined) {
//     result = number;
//   } else if ((minus[0] == "" && residual > 0) || residual == undefined) {
//     result = number - 1;
//   } else if (residual >= 0 || residual == undefined) {
//     result = number;
//   }
//   console.log(Number(result));
//   return Number(result);
// }
// floor(-347);

////////////// Math.ceil 

// function ceil(x) {
//     let number = x.toString().split(".")[0];
//     let minus = x.toString().split("-");
//     let residual = x.toString().split(".")[1];
//     let result;
//     if ((minus[0] === "" && residual >= 0) || residual == undefined) {
//       result = Number(number);
//     } else if (residual == 0 || residual == undefined) {
//       result = Number(number);
//     } else if (residual >= 0 || residual == undefined) {
//       result = Number(number) + 1;
//     }
//     console.log(result);
//     return result;
//     console.log(residual);
//   }
//   ceil(347.12);
  
 
  
