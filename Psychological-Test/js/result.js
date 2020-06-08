var explain=new Array(
"dd",
"dd",
"dd",
"dd",
);


function searchParam(key) {
	//alert(new URLSearchParams(location.search).get(key));
  return new URLSearchParams(location.search).get(key);
//20~60
};

function result(key){
	var recount=searchParam(key);
	var count=document.getElementsByClassName("count")[0];
	var explain=document.getElementsByClassName("explain")[0];
	//alert(explain.innerText);
	//alert(explain[0]);
	count.innerText=Math.round((recount-20)/40*100)+"%";
	if(recount>=20&&recount<30){
		explain.innerText=explain[0];
	}
}