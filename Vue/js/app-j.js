Vue.component("greeting",{
	template:'<p>{{name}}：大家好，我是某某某  <button v-on:click="changeNme">改名</button></p>',
	data:function(){
		return {
			name:"某某某"
		}
	},
	methods:{
		changeName:function(){
			this.name = "xxx";
		}
	}
})


new Vue({
	el:"#vueAppone",
});

new Vue({
	el:"#vueApptwo",
});