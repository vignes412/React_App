var AppConstants = require('../constant/AppConstant.js');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var AppActions = {
    addItem:function(item) {
            AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },
    removeItem:function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },
    decreaseItem:function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        })
    },
    increaseItem:function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        })
    },
    addnote:function(){
      AppDispatcher.handleViewAction({
        actionType:AppConstants.ADD_NOTE
      })
    },
    changenote:function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.CHANGE_NOTE,
            index: index
        })
    }

}

module.exports = AppActions;
