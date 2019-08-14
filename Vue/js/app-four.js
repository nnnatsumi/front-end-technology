new Vue({
	el:"#vueApp",
	data:{
		a: 0,
		b: 0,
		age: 20,
	},
	
	/* 这个例子若用"methods",则每点击一次,"Add to A"和"Add to B"都会执行,会造成资源浪费.则须使用“computed” */
	methods:{
		/* addToA:function(){
			return this.a + this.age;
		},
		addToB:function(){
			return this.b + this.age;
		} */
	},
	
	/* 因为"computed"是属性,所以对应的"addToA"不加"（）";"addToB"同理. */
	computed:{
		addToA:function(){
			return this.a + this.age;
		},
		addToB:function(){
			return this.b + this.age;
		}
	}
});