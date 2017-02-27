/*
 * chosen-readonly - Readonly support for Chosen selects
 * @version v1.0.6
 * @link http://github.com/westonganger/chosen-readonly
 * @license MIT
 */

(function($){

  $.fn.chosenReadonly = function(isReadonly){
    var elements = this.filter(function(i, item){
      return $(item).data('chosen');
    });

    elements.on('chosen:updated', function(){
      var item = $(this);
      if(item.attr('readonly')){
        var wasDisabled = item.is(':disabled');
        
        item.attr('disabled', 'disabled');
        item.data('chosen').search_field_disabled();

        if(wasDisabled) {
          item.attr('disabled', 'disabled');
        }else{
          item.removeAttr('disabled');
        }
      }
    });

    if(isReadonly){
      elements.attr('readonly', 'readonly');
    }else if(isReadonly === false){
      elements.removeAttr('readonly');
    }

    elements.trigger('chosen:updated');

    return this;
  };

}(window.jQuery || window.Zepto || window.$));
