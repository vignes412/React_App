const objectAssign = require('object-assign');
const EventEmitter = require('events');
const AppConstant = require('../constants/AppConstant.js');

var data = require('../util/data.js');
  var SearchedHistroy = [];
  if(localStorage.getItem("savedSearch")===null){
  localStorage.setItem("savedSearch", JSON.stringify(SearchedHistroy));
}
var AppStore =objectAssign({},EventEmitter.prototye,{
  emitchange:function () {
    this.emit(AppConstant.CHANGE_EVENT);
  },
  AddListener:function (callback) {
  this.on(AppConstant.CHANGE_EVENT,callback);
},
removeListener:function (callback) {
  this.removeListener(AppConstant.CHANGE_EVENT,callback);
},
getData:function () {
  return data;
},
StoreLocalStoreage:function(v){
  if(SearchedHistroy.indexOf(v)===-1){
  SearchedHistroy.unshift(v);
}
  localStorage.setItem("savedSearch", JSON.stringify(SearchedHistroy));
},
getLocalStorage:function(){
   SearchedHistroy = JSON.parse(localStorage.getItem("savedSearch"));
  return  SearchedHistroy===null? "" : SearchedHistroy;
}

});

module.exports = AppStore;
