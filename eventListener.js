$('.radio-container label').keypress(function (e) {

	//set variable for the key, e is the event object being passed
	var key = e.which;

	//check if the variable is equal to 13 (the return key value)
    if(key == 13) {

    	//set variable for this radio button attribute
    	var forAttribute = $(this).attr("for");

    	//if this is already checked, uncheck it
		if($('#' + forAttribute).is(':checked')){
			$('#' + forAttribute).prop("checked", false);
		}
		//if this is not checked, check it
		else{
			$('#' + forAttribute).prop("checked", true);
		}

    }
});