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

	var imageCenter = function(domList,mode){
		domList.forEach(function(item){
			//获取每个div中的图片
			var img = item.children[0];
			//获取div的宽和高
			var itemW = item.offsetWidth;
			var itemH = item.offsetHeight;
			//获取div宽和高的比
			var itemR = itemW/itemH;

			imageLoad(img).then(function(){
				// 获取图片的相关宽和高的数据
				var imgW = img.naturalWidth;
				var imgH = img.naturalHeight;
				var imgR = imgW/imgH;

				//定义class值
				var resultMode = null;
				switch(mode){
					case 'aspectFill':
						resultMode = imgR > 1 ? 'aspectFill-x' : 'aspectFill-y';
						break;
					case 'wspectFill':
						resultMode = itemR > imgR ? 'aspectFill-x' : 'aspectFill-y';
						break;
				}

				$(img).addClass(resultMode);
			})
		})
	}

	return imageCenter;
})