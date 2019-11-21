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
function _(x){
	return document.getElementById(x);
}
const request = (body) => {
	return obj = {
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded' },
		body: body
	};
}



const forecast = async() => {
  const data =  document.querySelector("#location").value;
  const url = "/weather?address="+data;
  alert(url);
  let Response = await fetch(url);
  if(Response.ok){   
    Response = await Response.json();
    if(Response.error){ return console.log(Response.error)}
    console.log(Response);
    document.querySelector(".storyicon").innerHTML = Response.forecast+'<br>'+ Response.location;
  }		
}
document.querySelector("#btnn").addEventListener("click", forecast)


