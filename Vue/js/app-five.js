new Vue({
	el:"#vueApp",
	data:{
		changeColor:false,
		changeColor:false
	},
	
	methods:{
		
	},
	
	computed:{
		compClasses:function(){
			return{
				changeColor:this.changeColor,
				changeLength:this.changeLength
			}
		}
	}
});