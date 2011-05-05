(function($){

    $.fn.slide_menu = function(options) {
    
        var settings = {
            'animate': true,
            'animate-speed': 600
        }

        if (options) {
            $.extend(settings, options);
        }
    
        return this.each(function(){
            var _this = $(this);
            var li_first = $(_this.find('li:first'));

            _this.attr('full-width', _this.innerWidth());
            _this.height(li_first.innerHeight());
            _this.css('overflow', 'hidden');
            _this.width(li_first.innerWidth());

            _this.mouseenter(function(){
                var _this = $(this);
                var full_width = parseInt(_this.attr('full-width'));

                if (settings['animate']) {
                    var small_width = _this.find('li:first').innerWidth();
                    _this.animate({width: '+=' + (full_width - small_width)}, settings['animate-speed']);
                } else {
                    _this.width(_this.attr('full-width'));
                }
            });

            _this.mouseleave(function(){
                var _this = $(this);
                var small_width = _this.find('li:first').innerWidth();

                if (settings['animate']) {
                    var full_width = parseInt(_this.attr('full-width'));
                    _this.animate({width: '-=' + (full_width - small_width)}, settings['animate-speed']);
                } else {
                    _this.width(small_width);
                }
            });
        });
    }
})(jQuery);
