define(['jquery','API'],function($,API) {
    var $ = $,
       API = API;

    getDayInfo = function(){
        return $.get(API.dayInfo);
    }

    getTypeInfo = function(){
        return $.get(API.typeInfo);
    }

    return{
        getDayInfo: getDayInfo,
        getTypeInfo: getTypeInfo
    }
});
