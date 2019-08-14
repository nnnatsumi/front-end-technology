/**
 * Created by Administrator on 2017-09-16.
 */
//获取id
function my$(id) {
	return document.getElementById(id);
}


/* 兼容代码 */
//设置任意的标签中间的任意文本内容
function setInnerText(element, text) {
	//判断浏览器是否支持这个属性
	if (typeof element.textContent == "undefined") { //不支持
		element.innerText = text;
	} else { //支持这个属性
		element.textContent = text;
	}
}

/* 兼容代码 */
//获取任意标签中间的文本内容
function getInnerText(element) {
	if (typeof element.textContent == "undefined") {
		return element.innerText;
	} else {
		return element.textContent;
	}
}


/* 兼容代码 */
//为任意元素,绑定任意事件:任意的元素/事件类型/事件处理函数
function addEventListener(element, type, fn) {
	//判断浏览器是否支持这个方法
	if (element.addEventListener) {
		//若支持
		element.addEventListener(type, fn, false);
	} else if (element.attachEvent) {
		//若支持
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}


//动画函数(设定任意一个元素，移动到指定位置)
			function	animate(element,target){
				//为了防止每次点击按钮都会创建定时器,则需要每次调用函数时先清理定时器
				clearInterval(element.timeId);
				
				//设置定时器
				element.timeId = setInterval(function(){
					//获取元素的当前位置
					var current = element.offsetLeft;    //数字类型
					//设置每次移动的距离
					var step = 8;
					//根据"从右往左"还是"从左往右",来判断step的正负
					step = current<target?step:-step;
					//每次移动后的位置
					current += step;
					
					//通过比较元素的目标位置和当前位置差的绝对值与每次移动距离的绝对值大小
					if(Math.abs(target-current)>Math.abs(step)){
						//没有到达指定位置,改变其left
						element.style.left = current + "px";
					}else{
						//到达指定位置,清理定时器
						clearInterval(element.timeId);
						element.style.left = target + "px";
					}
				},20);
			}