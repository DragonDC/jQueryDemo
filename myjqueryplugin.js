(function($) {
    $.fn.input = function(options) {
		
		return this.each(function() {//without each only the first input have this options
			var settings = $.extend({
				text : "Write sth"
			}, options);

			var defaultText = settings.text;
			$(this).val(defaultText);
			$(this).focus(function() {
				$(this).css({'background-color' : '#E0FFFF'});
				if ($(this).val() === defaultText) {
					$(this).val("");
				}
			});
			$(this).blur(function() {
				$(this).css({'background-color' : '#FFFFFF'});
				if ($(this).val() === "") {
					$(this).val(defaultText);	
				}
			});
		});
	};
	
	$.fn.validateName = function(options) {
		
		return this.each(function() {
			var settings = $.extend({
				pattern : /^([A-Z][a-z]{2,})$/
			}, options);
			
			var $regexname=settings.pattern;
			$(this).blur(function(){
				if (!$(this).val().match($regexname)) {
					$(this).siblings('.emsg').show();
					this.setCustomValidity('Invalid name!');
				}
				else{
					$(this).siblings('.emsg').hide();
					this.setCustomValidity('');
               }
			});
			
		});
	};
	
	$.fn.validateEmail = function(options) {
		
			var settings = $.extend({
				pattern : /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
			}, options);
			
			var $regexname=settings.pattern;
			$(this).blur(function(){
				if (!$(this).val().match($regexname)) {
					$(this).siblings('.emsg').show();
					this.setCustomValidity('Invalid mail!');
				}
				else{
					$(this).siblings('.emsg').hide();
					this.setCustomValidity('');
               }
			});
			
	};
	
	$.fn.passwordStrength = function(options){
			
		$(this).on('propertychange input', function (e) {
			var valueChanged = false;

			if (e.type=='propertychange') {
				valueChanged = e.originalEvent.propertyName=='value';
			} else {
				valueChanged = true;
			}
			if (valueChanged) {
				var score = 0; 
				var badPass = 'Weak Password';
				var mediumPass = 'Medium strength';
				var goodPass = 'Good password';
				var strongPass = 'Strong password';

				var password = $(this).val();
				
				score += password.length * 2;

				if (password.match(/(.*[0-9].*[0-9].*[0-9])/))  score += 5; 
				
				if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)) score += 5; 
				
				if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]{2,})/)) score += 7; 
				
				if (password.match(/(.*[A-Z].*[A-Z].*[A-Z])/))  score += 5;
				
				if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  score += 5; 
				
				if (password.match(/([!,@,#,$,%,^,&,*,?,_,~]+)/) && password.match(/([0-9]+)/))  score += 7; 
				
				if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/))  score += 7;

				if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/) && password.match(/([0-9]+)/))  score += 10;				
				
				if (password.match(/^\w+$/) || password.match(/^\d+$/) )  score -= 10; //password is only chars or numbers
				
				if ( score < 0 )  score = 0; 
				if ( score > 100 )  score = 100; 
				
				if (score < 30 )  
					$("#passwordStrength").text(badPass);
				else if (score < 60 && score > 30 )  
					$("#passwordStrength").text(mediumPass);
				else if (score < 80 && score > 60 )  
					$("#passwordStrength").text(goodPass);
				else
					$("#passwordStrength").text(strongPass);
				
			}
		});
		
	};
	
	$.fn.requiredField = function(options){
		return this.each(function() {
			if($(this).val() === '')
				this.setCustomValidity('This field is required!');
			else
				this.setCustomValidity('');
			
			$(this).blur(function(){
				if($(this).val() === '')
					this.setCustomValidity('This field is required!');
				else
					this.setCustomValidity('');
			});
			
		});		
		
	};
	
})(jQuery); 