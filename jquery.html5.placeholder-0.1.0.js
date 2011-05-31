/**
 * jQuery HTML5-Placeholder Plugin
 * @version		0.1.0 (2011-04-27)
 * @author		Jack H. (jack.sh.hsieh@gmail.com)
 * @license		GPL and MIT Licenses
 */

(function($) {
	$.fn.placeholder = function(options) {
		
		if (!supportInputPlaceholder()) {
			var defaults = {
				color : "#999"
			};
			
			this.options = $.extend(defaults, options);
				
			var color = {
				original : this.css('color'),
				grayed : this.options.color
			};
			var hint = this.attr('placeholder');
			var val = $.trim(this.val());
			
			if (val == '') {
				this.css('color', color).val(hint);
			}
			
			this.focus(function() {
				if (val == hint) {
					$(this).val('');
				}
			}).blur(function() {
				if ($.trim($(this).val()) == '') {
					$(this).val(hint);
				} else {
					$(this).val(val);
				}
			});
			
			return this.each(function() {});
		}
		
		function showPlaceholder($elm) {
			$elm.val($elm.attr('placeholder')).css('color', color.grayed);
		}
		
		function showValue($elm, val) {
			var val = val || '';
			$elm.val(val).css('color', color.original);
		}
		
		function supportInputPlaceholder() {
			var i = document.createElement('input');
			return 'placeholder' in i;
		}
	}
})(jQuery);
