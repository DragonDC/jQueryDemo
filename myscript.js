$(document).ready(function (){
	
	$('#firstName').requiredField();
	$('#lastName').requiredField();
	$('#username').requiredField();
	$('#email').requiredField();
	$('#password').requiredField();
	$('#repeatPassword').requiredField();
	
	$('#firstName').input( {text: "Insert your first name"}).addClass("blueColor");
	$('#lastName').input().addClass("blueColor");
	$('#username').input();
	$('#firstName').validateName();
	$('#lastName').validateName( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
	$('#email').validateEmail();
	$('#password').passwordStrength();

});