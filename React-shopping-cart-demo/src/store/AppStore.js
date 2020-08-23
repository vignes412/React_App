var React=require('react');
var ReactDom=require('react-dom');
var ObjectAssign=require('object-assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT='change';
var merge = require('merge');
var AppDispatcher=require('../dispatcher/AppDispatcher');
var AppConstants = require('../constant/AppConstant');

var _catalog=[
    {id:1, title: 'Item #1', cost: 50},
    {id:2, title: 'Item #2', cost: 26},
    {id:3, title: 'Item #3', cost: 32},
    {id:4,title:'Item #4', cost: 120},
    {id:5,title:'Item #5', cost: 200}
];

var _cartItems = [];

var notepad = {
    notes: [],
    selectedId: null
};
var nextNodeId = 1;

function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

function _increaseItem(index) {
    _cartItems[index].qty++;
}

function _decreaseItem(index) {
    if(_cartItems[index].qty > 1) {
        _cartItems[index].qty--;
    }
    else {
        _removeItem(index);
    }
}

function _addItem(item) {
    if(!item.hasOwnProperty('inCart') || !item.inCart) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);

    }
    else {
        _cartItems.forEach(function(cartItem, i) {
            if(cartItem.id === item.id) {
                _increaseItem(i);
            }
        });
    }
}

var AppStore = ObjectAssign({},EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCart:function() {
        return _cartItems;
    },

    getCatalog:function() {
        return _catalog;
    },
    getCount:function(index){
      var count=0;
      for (var i=0, iLen=_cartItems.length; i<iLen; i++) {
        if (_cartItems[i].title == index) {
          count= _cartItems[i].qty;
          break;
        }
        else
        {
          count= 0;
        }
      }
      return count;
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {

        var action = payload.action;

        switch(action.actionType) {
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
            break;
            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.action.index);
            break;
            case AppConstants.INCREASE_ITEM:
                _increaseItem(payload.action.index);
            break;
            case AppConstants.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
            break;

        }
        AppStore.emitChange();
        return true;
    })
  });

module.exports = AppStore;
