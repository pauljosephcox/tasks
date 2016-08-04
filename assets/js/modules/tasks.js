// ------------------------------------
//
// Tasks App
//
// ------------------------------------

(function($) {

	if (typeof window.Tasks == 'undefined') window.Tasks = {};

	Tasks = {

		total: 0,

		tasks: [],

		// ------------------------------------
		// App Init
		// ------------------------------------

		init: function() {

			console.log("Tasks::init");

			this.setup();

		},

		// ------------------------------------
		// Setup
		// ------------------------------------

		setup: function(){

			// On Click
			$('.field-new-task .append').on('click',function(e){

				e.preventDefault();

				if($('.field-new-task input').val()){
					Tasks.addTask($('.field-new-task input').val());
					$('.field-new-task input').val('');
				}

			});

			// On Enter
			$('.field-new-task input').on('keydown', function(e) {
			    if (e.which == 13) {
			        e.preventDefault();
			        Tasks.addTask($('.field-new-task input').val());
					$('.field-new-task input').val('');
			    }
			});

		},

		// ------------------------------------
		// Display Task
		// ------------------------------------

		addTask: function( task ){

			var id = 'task-'+ this.total;

			this.tasks.push(task);

			this.total++;

			var html = `<div class="task" style="display:none;"><div><input type="checkbox" name="${id}" id="${id}" value="true"><span class="box" for="${id}"></span></div><label for="${id}">${task}</label></div>`;

			$(html).appendTo('.tasks').delay(100).fadeIn();


		}

		// ------------------------------------
		// Tweets
		// ------------------------------------

		// tweets: function(){

		// 	if($('.tweet-container').length <= 0){ return; }

		// 	var settings = {};
		// 	settings.username = $('.tweet-container').data('username');
		// 	settings.hashtag  = $('.tweet-container').data('hashtag');
		// 	settings.limit    = $('.tweet-container').data('limit');

		// 	var url = '/api/twitter/search?';
		// 	if(settings.username){ url += 'username='+settings.username; }
		// 	else if(settings.hashtag){ url += 'hashtag='+settings.hashtag; }

		// 	if(settings.limit){ url += '&limit='+settings.limit; }

		// 	$.get(url, function(data) {

  //               if(data){

  //               	for(var i in data){

  //               		var tweet = `<div class="card -tweet">

		// 					<div class="icon">
		// 						<span class="icon-twitter"></span>
		// 					</div>

		// 					<div class="subtitle"><a href="${data[i].author_url}" target="_blank">${data[i].author_name}</a></div>

		// 					<div class="content">

		// 						<h5 class="title">${data[i].text}</h5>

		// 						<div class="date"><a href="${data[i].author_url}" target="_blank">@${data[i].author}</a></div>

		// 					</div>


		// 				</div>`;

  //               		$( tweet ).appendTo('.tweet-container').delay(100 * i).fadeIn();

  //               	}

  //               }

  //           });

		// },








	};

	module.exports = Tasks;

})(jQuery);