define(['jquery','dialog'],function($,Dialog){
	$("button.aspect").on("click",function(){
		Dialog({
			title: '友情提示',
			content: '你要出去吗？'
		}).show().then(function(){
			console.log('你点击了确认按钮?')
		}).catch(function(){
			console.log('取消')
		})
	})
})