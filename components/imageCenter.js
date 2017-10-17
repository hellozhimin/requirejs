define(function(){
	var imageLoad = function(img){
		return new Promise(function(resolve,reject){
			if(img.complete){
				resolve();
			}else{
				img.onload = function(event){
					resolve(event);
				}
				img.onerror = function(err){
					reject(err);
				}
			}
		})
	}

	var imageCenter = function(domList,mode)
})