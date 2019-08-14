var one = new Vue({
	el:"#vueAppone",
	data:{
		title:"app one的内容"
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "Hello app one";
		}
	},
});

var two = new Vue({
	el:"#vueApptwo",
	data:{
		title:"app two的内容"
	},
	methods:{
		changeTitle:function(){
			one.title = "已经改名了！"
		}
	},
	computed:{
		greet:function(){
			return "Hello app two";
		}
	},
});