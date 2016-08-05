// when page finishes loading ...
$(document).ready (function(){

console.log("I am loaded");
//make an array to hold the answers to the survey predefined with 10 places to be changed to actual values

var answersArray = [2,2,2,2,2,2,2,2,2,2];


	$('#answers').click(function(){
		//getting the data-value of the buttons in the survey and assigining them to arrayIndex
		//this will tell you which question answer goes to which question
		var arrayIndex = $(this).data('index');
		// get the html text from the button in this case integers
		var answer = +this.innerHTML 
		// when the data index and the selected question indexof the button are the same, remove the selected class from the other buttons
		//this avoids people selecting more than one button
		$('button[data-index='+arrayIndex+']').removeClass('selcted');
		// add the "selected" class to the button that was chosen
		$(this).addClass('selcted');
		// change the value in the array for the answer by the data-index assigned to the button
		answers[arrayIndex] = answer;

	})

	// function to be used later to send the info captured to the api and show the modal pop-up with the response
	function postToApi(){
		// the url created in the express routing for the api
		var url = 'http://localhost:8070/api/friends';
		// jquery post request with the previously created "postObject", includes call back function with the data send from the server
		$.post(url, postObject, function(data){
			// add the name and image to the modal
			$('#modalBody').html('<p class="text-center">'+data.name+'</p>');
			$('#modalBody').append('<img class="center-block" src="'+data.photo+'" alt="'+data.name+'" style="max-width:100%">');
			// show the modal
			$('#myModal').modal('show');
			// reset the test 
			$( '#name' ).val('');
			$( '#imageURL' ).val('');
			$('.btn').removeClass('selcted');

		});
	};

		// upon click of the submit button
	$('#submitBtn').click(function(){
		// capture the values from the name and imageURL fields.
		var name = $( '#name' ).val().trim();
		var imageURL = $( '#imageURL' ).val().trim();

		// if there is a name and an image url, then send the post object
		if(name){
			if(imageURL){
				// if both exist then create an object with captured data
				postObject = {
					name: name,
					photo: imageURL,
					scores: answers
				};
				// run the function to send to the api
				postToApi();

			} else {
				// if no imageURL then post reminder to enter it
				alert('Please enter an image URL.');
			};
			
		} else {
			// if no name then post reminder to enter it
			alert('Please enter your name.');
		};
	});
});



























