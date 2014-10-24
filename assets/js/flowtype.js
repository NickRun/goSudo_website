(function($) {
   $.fn.flowtype = function(options) {
      var settings = $.extend({
         maximum   : 768,
         minimum   : 320,
         maxFont   : 50,
         minFont   : 23,
         fontRatio : 12
      }, options),
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };
      return this.each(function() {
         var that = this;
         $(window).resize(function(){changes(that);});
         changes(this);
      });
   };
}(jQuery));