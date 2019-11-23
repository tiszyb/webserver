const toggleCP = () => {
  const cp = document.querySelector('.cp');
  //alert(cp);
  if(cp.style.opacity == 1){
    cp.style.opacity = 0;
    cp.style.left = "-260px"; // remove it from active screen space
  } else {
    cp.style.left = "0px"; // return it to active screen space
    cp.style.opacity = 1;
  }
}
const toggleOff = () => {
  const cp = document.querySelector('.cp');
  //alert(cp);
  if(cp.style.opacity == 1){
    cp.style.opacity = 0;
    cp.style.left = "-260px"; // remove it from active screen space
  } 
}
function _(x){
  if(document.querySelector(x)){
    return document.querySelector(x);
  }
}
const request = (body) => {
	return obj = {
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded' },
		body: body
	};
}
function myFunction() {
  const cp =_('.cp');
  if(window.outerWidth > 700 || window.outerWidth < 850){
    cp.style.opacity = 0;
    cp.style.left = "-260px"; // remove it from active screen space
  }  
}

const forecast = async() => {
  const data =  document.querySelector("#location").value;
  const output = document.querySelector(".storyicon");
  const url = "/weather?address="+data;

  output.innerHTML = "";
  output.innerHTML = "loading...."; 
  let Response = await fetch(url);
  
  if(Response.ok){       
    Response = await Response.json();
    if(Response.error){ return document.querySelector(".storyicon").innerHTML = Response.error;	}
    console.log(Response);
    output.innerHTML = Response.forecast+'<br>'+ Response.location;
  } 
}
var el = _("#btnn");
if(el){
  el.addEventListener('click', forecast, false);
}

var elem = _(".container");
if(elem){
  elem.addEventListener('click', toggleOff, false);
}
window.addEventListener("resize", myFunction);



