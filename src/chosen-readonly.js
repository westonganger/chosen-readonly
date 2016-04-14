/**
 * chosen-readonly - Readonly support for Chosen selects
 * @version v0.9.0
 * @link http://github.com/westonganger/chosen-jquery
 * @license GNU GPL
 */

(function($){

  $.fn.chosenReadonly = function(isReadonly){
    if(isReadonly){
      this.attr('readonly', 'readonly');
    }elsif(isReadonly === false){
      this.removeAttr('readonly');
    }

    this.on('chosen:updated', function(){
      var item = $(this);
      if(isReadonlyitem.attr('readonly')){
        var wasDisabled = item.is(':disabled');
        
        item.attr('disabled', 'disabled');
        item.data('chosen').search_field_disabled();

        if(wasDisabled) {
          item.attr('disabled', 'disabled');
        }else{
          item.removeAttr('disabled');
        }
      }
    }).trigger('chosen:updated');
  };

}(jQuery));
