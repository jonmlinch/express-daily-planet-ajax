$(document).ready(function() {
  console.log('Hello from teams-ajax.js!');
  $("#edit-form").submit(function(e){
  	e.preventDefault();
  	var url = $(this).attr("action");
  	var data = $(this).serialize();
  	console.log('url is', url)
  	console.log('data', data)

  	$.ajax({
  		method: "PUT",
  		url: url,
  		data: data
  	}).done(function(data){
  		console.log("success!", data);
  		window.location = "/articles"
  	}).fail(function(err){
  		console.log("error", err)
  	}); //end of ajax
  }) //end of edit-form submit

  $("#delete-btn").click(function(e){
  	e.preventDefault(); //Stops page from refreshing but I may actually want this since button is on same page
  	var url = $(this).attr("href"); //Gets href from delete link button
  	console.log("stuff is working", url)
  	$.ajax({
  		method: "DELETE",
  		url: url,
  	}).done(function(data){
  		console.log('success', data);
  		window.location = "/articles"; //May not need this page refreshes
  	}).fail(function(err){
  		console.log("err", err);
  	})
  })
});