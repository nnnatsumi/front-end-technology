//实例化Vue对象
new Vue({
	el:"#vueApp",     //el：element 需要获取的元素，一定是html中的根容器元素
	data:{               //data：用于数据存储
		name:"段培华",
		job:"web开发",
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com'></a>"
	},
	methods:{          //用于存储各种方法
		greet:function(time){
			return 'Good' + time + " " + this.name +"!";     //在Vue中获取上面的属性，可以直接用“ this.属性名 ”就可以了
		}
	}
});


/* data-binding:给属性绑定对应的值 */