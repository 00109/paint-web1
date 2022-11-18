
var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("orange");
colorCircles[7] = document.getElementById("blueviolet");
colorCircles[8] = document.getElementById("black");
colorCircles[9] = document.getElementById("LightSlateGrey");



var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#0F0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
		else if (e.target.id=="orange"){
			targetColor="orange"
		}
		else if (e.target.id=="blueviolet"){
			targetColor="blueviolet"
		}
		else if (e.target.id=="black"){
			targetColor="black"
		}
		else if (e.target.id=="LightSlateGrey"){
			targetColor="#778899"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		for (var i =0; i<=9; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e){
	if (e.which==1){
		
		canvasContext.fillStyle=targetColor;/*цвет заливки берем из переменной targetcolor*/
		canvasContext.beginPath();/*отвязка конец действия*/
		canvasContext.arc(e.offsetX, e.offsetY, 5, 0, Math.PI*2);/*координата x, координата y, ширина, радиус, начальный угол 0 конечный пи/2 или 360*/
		/*там где у нас мышка мы отрисовываем круг рамером 5px*/

		canvasContext.fill();
	}
}


