var ex=new Array(
"당신은 완전무결한 마음 따듯한 사람입니다.<br>당신은 타인의 감정에 대한 공감 능력이 매우 뛰어나고, 다른 사람의 고통이나 곤란한 상황을 보고 절대 지나치지 못하는 이타심 또한 가득합니다.<br>당신은 오히려 마음이 매우 따듯한 사람이군요.",
"당신은 평범한 사람입니다. <br> 타인의 감정에 공감하며 본인 감정을 억제할수 있는 능력이 있습니다. 약간의 거짓말을 하고 책임감이 없을 수 있으나 일반 사람이라면 누구나 가질 수 있는 경향입니다. 그러나 본인이 잠재적 싸이코패스일수도 있다는 것을 유의해봐도 나쁘진 않겠군요.",
"당신은 잠재적 싸이코패스일 확률이 높습니다. <br>본인 감정에 미숙하고 감정을 억제하기 어렵습니다.<br> 본인의 감정과 고통에는 예민하지만 타인에 대한 공감을 하기 어려우며 타인과 정서적 유대감을 잘 맺지 못합니다.",
"당신은 아주 위험한 싸이코패스입니다.<br> 다른 사람을 전혀 고려할 줄 모르고, 자기 뜻대로 행동하는 경향이 있습니다. 또한 슬픔이나 불안 같은 감정을 느끼지 못하고 자기 자신만 생각하는 이기주의 성격을 가집니다.",
);

var ex1=new Array(
	"하늘에서 내려온 수호천사",
	"천사와 악마의 경계",
	"타락천사",
	"Are you serious?",
);

var images=new Array(
	"re1.png",
	"re2.png",
	"re3.png",
	"re4.png",
);

var explainClass=new Array();
var imageClass=new Array();

function searchParam(key) {
    return new URLSearchParams(location.search).get(key);
};

function exInnerText(idx1,idx2,idx3){
	explainClass[0].innerHTML=ex1[idx1];
	explainClass[1].innerHTML=ex1[idx2];
	explainClass[2].innerHTML=ex1[idx3];
	imageClass[0].src="images/"+images[idx1];
	imageClass[1].src="images/"+images[idx2];
	imageClass[2].src="images/"+images[idx3];
};

function result(key){
	var recount=searchParam(key);
	var count=document.getElementsByClassName("count")[0];
	var explain=document.getElementsByClassName("explain")[0];
	var image=document.getElementsByClassName("img")[0];

	for(var i=0; i<3; i++){
		explainClass[i]=document.getElementsByClassName("explain")[i+1];
		imageClass[i]=document.getElementsByClassName("img")[i+1];
	}

	count.innerText=Math.round((recount-20)/40*100)+"%";
	if(recount>=20&&recount<30){
		explain.innerHTML=ex[0];
		image.src="images/"+images[0];
		exInnerText(1,2,3);
	}
	else if(recount>=30&&recount<40){
		explain.innerHTML=ex[1];
		image.src="images/"+images[1];
		exInnerText(0,2,3);
	}
	else if(recount>=40&&recount<50){
		explain.innerHTML=ex[2];
		image.src="images/"+images[2];
		exInnerText(0,1,3);
	}
	else if(recount>=50&&recount<=60){
		explain.innerHTML=ex[3];
		image.src="images/"+images[3];
		exInnerText(0,1,2);
	}
}

