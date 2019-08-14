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


//匀速动画函数(设定任意一个元素，移动到指定位置)
			function	animate(element,attr,target){
				//为了防止每次点击按钮都会创建定时器,则需要每次调用函数时先清理定时器
				clearInterval(element.timeId);
				
				//设置定时器
				element.timeId = setInterval(function(){
					//获取元素的当前位置
					var current = parseInt(getStyle(element,attr));    //数字类型
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
			

//element:元素
//attr:属性名字
//target:目标位置			
//变速(缓动)动画函数(设定任意一个元素，移动到指定位置)
			function	animate1(element,attr,target){
				//为了防止每次点击按钮都会创建定时器,则需要每次调用函数时先清理定时器
				clearInterval(element.timeId);
				
				//设置定时器
				element.timeId = setInterval(function(){
					//获取元素的当前位置,通过计算后的样式属性得到为字符串类型转数字类型
					var current = parseInt(getStyle(element,attr));    //数字类型
					//设置每次移动的距离(缓动)
					var step = (target-current)/10;
					//根据"从右往左"还是"从左往右",来判断step的正负:正的就向上取整,负的就向下取整
					step = step>0?Math.ceil(step):Math.floor(step);
					//每次移动后的位置
					current += step;
					element.style[attr] = current + "px";
					
					//判断
					if(current == target){
						//清理定时器
						clearInterval(element.timeId);
					}
					
					//测试代码:
					console.log("当前位置:"+current+";目标位置:"+target+";步数:"+step);
				},20);
			}
			

//改变多个属性样式：			
			//element:元素
			//变速(缓动)动画函数(设定任意一个元素，移动到指定位置)
			function	animate(element,json){
				//为了防止每次点击按钮都会创建定时器,则需要每次调用函数时先清理定时器
				clearInterval(element.timeId);
				
				//设置定时器
				element.timeId = setInterval(function(){
					//默认,假设,全部到达目标
					var flat = true;
					for(var attr in json){
						//获取元素的当前位置,通过计算后的样式属性得到为字符串类型转数字类型
						var current = parseInt(getStyle(element,attr));    //数字类型
						//当前的属性对应的目标值
						var target = json[attr];
						//设置每次移动的距离(缓动)
						var step = (target-current)/10;
						//根据"从右往左"还是"从左往右",来判断step的正负:正的就向上取整,负的就向下取整
						step = step>0?Math.ceil(step):Math.floor(step);
						//每次移动后的位置
						current += step;
						element.style[attr] = current + "px";
						//判断是否到达目标
						if(current != target){
							flat = false;
						}
					}
						//判断
						if(flat){
							//清理定时器
							clearInterval(element.timeId);
					}
					
					//测试代码:
					console.log("当前位置:"+current+";目标位置:"+target+";步数:"+step);
				},20);
			}
					
					
//兼容代码,获取浏览器向上卷曲出去距离的值,向左卷曲出去的距离
			function getScroll()	{
				return {
					//向上卷曲出去的距离写法:
					top : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
					//向左卷曲出去的距离写法:
					left : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
				};
			}
			
			
//兼容代码:
					//获取任意 1)一个元素的任意 2)一个样式属性的值
								function getStyle(element,attr){
									//判断浏览器是否支持此方法
									return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
								}