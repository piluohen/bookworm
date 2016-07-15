function getCss(ele, attr) {
	if (typeof getComputedStyle == "function") {
		return parseFloat(getComputedStyle(ele, null)[attr]);
	} else {
		return parseFloat(ele.currentStyle[attr]);
	}
}
function buffer(ele, attr, target, fnCallback) {
	window.clearTimeout(ele.timer);
	_buffer();
	function _buffer() {
		var cur = getCss(ele, attr);
		var nSpeed = (target - cur) / 10;
		nSpeed = nSpeed > 0 ? Math.ceil(nSpeed) : Math.floor(nSpeed);
		ele.style[attr] = cur + nSpeed + "px";
		if (nSpeed) {
			ele.timer = window.setTimeout(_buffer, 30);
		} else {
			if (typeof fnCallback == "function") {
				fnCallback.call(ele);
			}
			ele.timer = null;
		}
	}
}
var oOuter = document.getElementById("outer"),
    oInner = document.getElementById("inner"),
    oBtn = document.getElementById("btn"),
	oDivT = document.getElementById("divT"),
	oDivD = document.getElementById("divD"),
	oLis = document.getElementById("outer").getElementsByTagName("li");
for (var i = 0; i < oLis.length; i++) {
	(function (i) {
		oLis.item(i).onclick = function () {
			buffer(oInner, "top", i * -300);
			currentSelected(i);
			clearTimeout(autoTimer);
			step = i;
			autoTimer = window.setTimeout(autoTop, 3000);//定时器不能积累
		}
	})(i);
}
var oFiestDiv = oInner.getElementsByTagName("img").item(0);
var oCopy = oFiestDiv.cloneNode(true);
oInner.appendChild(oCopy);
oInner.style.height = oInner.offsetHeight + oFiestDiv.offsetHeight + "px";//注意原宽度变了
var autoTimer = null;
var step = 0;
var n = oLis.length;
function currentSelected(step) {
	for (var i = 0; i < n; i++) {
		oLis.item(i).className = "";
	}
	if (step == n) {
		oLis.item(0).className = "current";
	} else {
		oLis.item(step).className = "current";
	}
}
function autoTop() {
	step++;
	if (step == n + 1) {
		oInner.style.top = 0;
		step = 1;
	}
	buffer(oInner, "top", step * -300);
	currentSelected(step);
	clearInterval(autoTimer);
	autoTimer = window.setTimeout(autoTop, 4000);
}
function autoDown() {
	step--;
	if (step == -1) {
		oInner.style.top = -(300 * n) + "px";
		step = n - 1;
	}
	buffer(oInner, "top", step * -300);
	currentSelected(step);
	clearInterval(autoTimer);
	autoTimer = window.setTimeout(autoDown, 4000);
}
window.setTimeout(autoTop, 4000);
//鼠标悬停	
var oDivs = oInner.getElementsByTagName("img");
for (var i = 0; i < oDivs.length; i++) {
	oDivs.item(i).onmouseover = function () {
		clearTimeout(autoTimer);
	}
	oDivs.item(i).onmouseout = function () {
		autoTimer = window.setTimeout(autoTop, 2000);
	}
}