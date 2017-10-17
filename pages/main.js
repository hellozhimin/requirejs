require.config({
	baseUrl: './libs',
	paths: {
		jquery:"jquery",
		API: 'API',
		request: 'request',
		data: '../components/data',
		imageCenter: '../components/imageCenter',
		dialog: '../components/dialog',
		button: '../components/button'
	}
})
define(['jquery','data','imageCenter','button'],function($,data,imageCenter,button){
	var $ = $,
		data = data;
	var imageWrapList = document.querySelectorAll('.img-center');
	imageCenter(imageWrapList,'wspectFill');
	
})
