var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};







  let Name  = promp('Enter your name')
document.getElementById('name').innerHTML = Name

let Country = promp('Enter Your Country')
document.getElementById('country').innerHTML = Country
 
//let Following = promp('Enter Your Following '+"(◕‿◕)")
//document.getElementById('count').innerHTML = Following
let flag = document.getElementById('flag')
switch(Country){
  case "India" :
    console.log("I am " + Country + " citizen")
    break;
    case "America":
    console.log("I am " + Country + " citizen")
    break;
    case "Russia":
      console.log("I am " + Country + " citizen")
      break;
      case "USA":
        console.log("I am " + Country + " citizen")
        break;

}
//India