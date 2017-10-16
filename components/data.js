define(['request'],function(request){
	request.getTypeInfo()
		.then(function(resp){
			console.log(resp.ret)
		})
})