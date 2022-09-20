////////////////////////////////////
// let num = 10;
// if(num%2==0){
//   console.log('BOB win');
// }else{
//   console.log('ALICA  lose');
// }

///////////////////////////////////
  // let x =30;
// if( x % 3 ==0){
//     console.log("Bu son 3ga bolinadi");
// }
///////////////////////////////////////////////
//   let x =30;
// if( x % 5 ==0){
//     console.log("Bu son 5ga bolinadi");
//}
////////////////////////////////x///////
//  let x =30;
// if(x % 5 == 0 &&x % 3 == 0){
//     console.log('Bu son 5ga va 3ga bolinadi');
//  }else if(x%3==0){
//   console.log('Bu son 3ga bolinadi');
// }else if(x % 5 ==0){
//      console.log('BU son 5ga bolinadi')
//  }
const printNumText = (number) => {
    let birlikSon = number % 10;
    let onlik = Math.floor(number / 10);
    let onlikSon = onlik % 10
    let onlikSonText = "";
    let birlikSonText = "";
    let yuzlikSon = Math.floor(number / 100);
    let yuzlikSonText = "";
  
  
    switch (yuzlikSon) {
      
      case 1:
        yuzlikSonText = "Bir yuz"
        break;
      case 2:
        yuzlikSonText = "Ikki yuz"
        break;
      case 3:
        yuzlikSonText = "Uch yuz"
        
        break;
      case 4:
        yuzlikSonText = "To'rt yuz"
        break;
      case 5:
        yuzlikSonText = "Besh yuz"
        break;
      case 6:
        yuzlikSonText = "Olti yuz"
        break;
      case 7:
        yuzlikSonText = "Yetti yuz"
        break;
      case 8:
        yuzlikSonText = "Sakkiz yuz"
        break;
      case 9:
        yuzlikSonText = "To'qqiz yuz"
        break;
    }
  
    switch (onlikSon) {
     
      case 1:
        onlikSonText = "o'n"
        break;
      case 2:
        onlikSonText = "yigirma"
        break;
      case 3:
        onlikSonText = "o'ttiz"
        break;
      case 4:
        onlikSonText = "qriq"
        break;
      case 5:
        onlikSonText = "ellik"
        break;
      case 6:
        onlikSonText = "oltmish"
        break;
      case 7:
        onlikSonText = "yettimish"
        break;
      case 8:
        onlikSonText = "sakson"
        break;
      case 9:
        onlikSonText = "to'qson"
        break;
    }
  
    switch (birlikSon) {
    
      case 1:
        birlikSonText = "bir"
        break;
      case 2:
        birlikSonText = "ikki"
        break;
      case 3:
        birlikSonText = "uch"
        break;
      case 3:
        birlikSonText = "uch"
        break;
      case 4:
        birlikSonText = "to'rt"
        break;
      case 5:
        birlikSonText = "besh"
        break;
      case 6:
        birlikSonText = "olti"
        break;
      case 7:
        birlikSonText = "yetti"
        break;
      case 8:
        birlikSonText = "sakkiz"
        break;
      case 9:
        birlikSonText = "toqqiz"
        break;
    }
    let res = yuzlikSonText + " " + onlikSonText + " " + birlikSonText
    console.log(res.trim());
  }
  printNumText(900)