/*
 * chosen-readonly - Readonly support for Chosen selects
 * @version v1.0.3
 * @link http://github.com/westonganger/chosen-readonly
 * @license GNU GPL
 */

(function($){

  $.fn.chosenReadonly = function(isReadonly){
    this.on('chosen:updated', function(){
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
      this.attr('readonly', 'readonly');
    }else if(isReadonly === false){
      this.removeAttr('readonly');
    }

    this.trigger('chosen:updated');
  };

}(jQuery));
