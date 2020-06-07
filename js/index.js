var que = new Array(
	"말 잘하는 것을 매력이라고 생각한다",
	"자신의 가치에 대해 자랑하는 걸 좋아한다",
	"거짓말을 입에 달고 산다",
	"속임수를 경멸하거나 극단적으로 싫어한다",
	"매사에 냉담하고 남이 말하는 것에 <br>공감하지 않는다",
	"괜찮은 제안이 있으면 오래된 계획을<br> 쉽게 포기할 수 있다",
	"빠르게 달리는 자동차나 롤러코스터를 <br> 타는게 좋다",
	"사람을 다루는데 능숙해서 원하는 것을<br> 쉽게 얻어낼 수 있다",
	"위험한 직업을 가져도 괜찮을 것 같다",
	"계획을 잘 세우지 않고 항상 즉흥적이다",
	"자신을 포장하여 자랑하고 다닌다",
	"어렸을 적 비행경험이 많다",
	"많고 짧은 연애를 한다",
	"감동적인 것을 봐도 감정적으로 <br> 와닿는게 없다",
	"책임감이 부족한 편이다",
	"일상 생활에서 자극적인 요소가 <br> 필요하다",
	"목표는 장황하나 실행력이 낮다",
	"충동적으로 생활하는 경향이 강하다",
	"이익을 위해서라면 약속을 깨도 <br> 상관없다",
	"어릴때 나쁜 짓을 자주 하였다",
);

var color=new Array(
	"linear-gradient(to bottom, #3e3499, #4a3499)",//1
	"linear-gradient(to bottom, #4a3499, #5c3699)",//2
	"linear-gradient(to bottom, #5c3699, #703799)",//3
	"linear-gradient(to bottom, #703799, #7f3799)",//4
	"linear-gradient(to bottom, #7f3799, #8d3799)",//5
	"linear-gradient(to bottom, #8d3799, #993987)",//6
	"linear-gradient(to bottom, #993987, #993a61)",//7
	"linear-gradient(to bottom, #993a61, #993a3a)",//8
	"linear-gradient(to bottom, #993a3a, #993a61)",
	"linear-gradient(to bottom, #993a61, #993987)",//7
	"linear-gradient(to bottom, #993987, #8d3799)",//6
	"linear-gradient(to bottom, #8d3799, #7f3799)",//5
	"linear-gradient(to bottom, #7f3799, #703799)",//4
	"linear-gradient(to bottom, #703799, #5c3699)",//3
	"linear-gradient(to bottom, #5c3699, #4a3499)",//2
	"linear-gradient(to bottom, #4a3499, #3e3499)",//1
	"linear-gradient(to bottom, #3e3499, #365099)",//1
	"linear-gradient(to bottom, #365099, #376699)",//1
	"linear-gradient(to bottom, #376699, #399986)",//1
	"linear-gradient(to bottom, #399986, #3a9599)",//1
 );

function test(){
	var className=$('#body').attr("class");
	var str=className.split('-');
	var test=document.getElementsByClassName("test")[Number(str[2])];
	if(!document.getElementsByClassName("fp-tableCell")[Number(str[2])+1].id){
		element(str[2],test.id);
		radio(str[2],"예");
		radio(str[2],"아니오");
		radio(str[2],"잘 모르겠다");
		if(str[2]==que.length-1){
			button(str[2]);
		}
	}
}

function createSection(){
	for(var i=1; i<=que.length; i++){
		var section=document.createElement('div');
		section.classList.add('section');
		section.classList.add('test');
		document.getElementById("fullpage").append(section);
		document.getElementsByClassName("section")[i].id="test"+String(i-1);
		document.getElementsByClassName("section")[i].style.background=color[i-1];
		document.getElementsByClassName("section")[i].style.width="100vw";
		document.getElementsByClassName("section")[i].style.height="100vh";
	}
}

function button(page){
	var bottom=document.createElement('div');
	bottom.classList.add('bottom');
	document.getElementsByClassName("sub-main")[Number(page)].append(bottom);

	var start=document.createElement('div');
	start.classList.add('start');
	document.getElementsByClassName("bottom")[0].append(start);
	
	var button=document.createElement('input');
	button.type='button';
	button.classList.add('startbutton');
	button.value="결과 확인하기"
	document.getElementsByClassName("start")[0].append(button);
	button.addEventListener('click', function(event) {
   	location.href="result.html?re="+result();
	})
}

function result(){
	var result=new Array();
	var recount=0;
	for(var i=0; i<que.length; i++){
		result[i]=document.getElementsByName("test"+String(i));
		for(var j=0; j<result[i].length; j++){
			if(result[i][j].checked){
				if(result[i][j].value=="예"){
					recount+=3;
				}
				else if(result[i][j].value=="아니오"){
					recount+=1;
				}
				else if(result[i][j].value=="잘 모르겠다"){
					recount+=2;
				}
				break;
			}
		}
	}
	return recount;
}
function radio(page,answer){
	var radio=document.createElement('input');
	radio.type='radio';
	radio.classList.add('select');
	document.getElementsByClassName("selects")[Number(page)].append(radio);
	radio.name="test"+page;
	radio.value=answer;

	var an=document.createElement('span');
	document.getElementsByClassName("selects")[Number(page)].append(an);
	an.innerHTML=answer+"<br>";
}

function element(page,id){
	var str=id.split('t');
	var subid=document.getElementsByClassName("fp-tableCell")[Number(page)+1].id="sub"+id;
	var submain=document.createElement('div');
	submain.classList.add('sub-main');
	document.getElementById(subid).append(submain);
	document.getElementsByClassName("sub-main")[Number(page)].id="submain";

	var wrap=document.createElement('div');
	wrap.classList.add('wrap');
	document.getElementsByClassName("sub-main")[Number(page)].append(wrap);
	document.getElementsByClassName("wrap")[Number(page)].id="wrap";

	var qu=document.createElement('div');
	qu.classList.add('qu');
	document.getElementsByClassName("sub-main")[Number(page)].append(qu);
	document.getElementsByClassName("qu")[Number(page)].id="qu";

	var selects=document.createElement('div');
	selects.classList.add('selects');
	document.getElementsByClassName("sub-main")[Number(page)].append(selects);
	document.getElementsByClassName("selects")[Number(page)].id="selects";

	var count=document.createElement('div');
	count.classList.add('count');
	document.getElementsByClassName("wrap")[Number(page)].append(count);
	if(Number(page)+1<10){
		count.innerHTML="0"+(Number(page)+1)+"/";
	}else{
		count.innerHTML=(Number(page)+1)+"/";
	}

	var total=document.createElement('div');
	total.classList.add('total');
	document.getElementsByClassName("wrap")[Number(page)].append(total);
	total.innerHTML=String(que.length);

	var question=document.createElement('div');
	question.classList.add('question');
	document.getElementsByClassName("qu")[Number(page)].append(question);
	question.innerHTML=que[Number(page)];

}


