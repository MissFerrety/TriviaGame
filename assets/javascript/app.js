$(function(){

	/* Instantiate global vars */
	var secsToNext = 3;
	var secsToAnswer = 10;
	var currentQobj = null;
	var currentQid = 0;
	var qTimer, nextTimer;
	var quiz;
	var resultCorrect = resultWrong = resultSkipped = 0;

	/* Create class for quiz creation & checking */
	var Question = function(q,a,x1,x2,x3){
		this.question = q;
		this.answer = a;
		this.wrong = [x1,x2,x3];
	}
	Question.prototype.build = function(){
		// Clear list and add click class checker
		$('#options').addClass('open').html('');
		// Add question to the board
		$('#question').html(this.question);

		// Wrap the answers in HTML
		var options = ['<li>'+this.answer+'</li>'];
		$.each(this.wrong, function(){
			options.push('<li>'+this+'</li>');
		});

		// Randomize the answer array and add to the DOM
		options.sort(function() { return 0.5 - Math.random() });
		$.each(options, function(){
			$('#options').append(this);
		});
		$('#options li').addClass('answer'); // For styles

		// Assign this question to a variable to access in listener
		currentQobj = this;

		var t = secsToAnswer;
		qTimer = setInterval(qCountdown, 1000);
		$('#next-timer').hide();
		$('#question-timer').show();
		$('#q-time-left').html(t);

		function qCountdown(){
			t--;
			if(t === 0){
				clearInterval(qTimer);
				currentQobj.check(null);
			}
			$('#q-time-left').html(t);
		}
	}
	Question.prototype.check = function(selected){
		// Ensure one click only
		$('#options').removeClass('open');

		if(selected){
			// Check selected text against answer
			var check = selected.html();
			// Add class to selection
			selected.addClass('selected');

			if(this.answer === check){
				// You are correct
				selected.addClass('correct');
				resultCorrect++;
			}else{
				selected.addClass('wrong');
				resultWrong++;
			}
		}else{
			resultSkipped++;
		}
		// Stop the clock
		clearInterval(qTimer);
		// Reveal the correct answer
		setTimeout(function() {
			$('.answer:contains('+currentQobj.answer+')').addClass('correct');
			currentQobj.next();
		}, 500);
	}
	Question.prototype.next = function(){
		if(currentQid == quiz.length - 1){
			// Quiz is over.  Display results.
			setTimeout(function() {
				endQuiz();
			}, 500);
		}else{
			$('#question-timer').hide();
			$('#next-timer').show();

			var t = secsToNext;
			nextTimer = setInterval(nCountdown, 1000);
			$('#n-time-left').html(t);

			function nCountdown(){
				t--;
				if(t === 0){
					clearInterval(nextTimer);
					currentQid++;
					currentQobj = null;
					quiz[currentQid].build();
				}
				$('#n-time-left').html(t);
			}
		}
	}

	function endQuiz(){
		// Populate & display results
		$('#num-correct').html(resultCorrect);
		$('#num-wrong').html(resultWrong);
		$('#num-skipped').html(resultSkipped);
		$('#quiz').fadeOut(500, function(){
			$('#endscreen').fadeIn(500);
		});
	}
	function restartQuiz(btnid){
		// Reset vars
		currentQid = 0;
		currentQobj = null;
		resultCorrect = resultWrong = resultSkipped = 0;

		// Hide the start or end screen & display quiz
		$('#'+btnid).parents('.bookend').fadeOut(500, function(){
			$('#quiz').fadeIn(500);
			quiz[currentQid].build();
		});
	}

	quiz = [
		new Question(
			'What is Japan\'s largest island?',
			'Honshu',
			'Kyuushu',
			'Shikoku',
			'Hokkaido'
		),
		new Question(
			'What is the approximate population of Japan?',
			'127 million',
			'200 million',
			'163 million',
			'92 million'
		),
		new Question(
			'The imperial seal of Japan is which flower?',
			'chrysanthemum',
			'daffodil',
			'rose',
			'cherry blossom'
		),
		new Question(
			'What is the drinking age in Japan?',
			'20',
			'18',
			'16',
			'22'
		),
		new Question(
			'During which holiday would you see carp flags flown?',
			'こどもの日 (Children\'s Day)',
			'文化の日 (Culture Day)',
			'成人の日 (Coming of Age Day)',
			'元日 (New Year\'s)'
		),
		new Question(
			'Which of the following is a modern Japanese Christmas tradition?',
			'Fried chicken dinner',
			'They don\'t celebrate Christmas',
			'??',
			'??'
		),
		new Question(
			'What is the approximate ratio of vending machines to people in Japan?',
			'1 to 25',
			'1 to 1000',
			'1 to 10',
			'1 to 300'
		),/*
		new Question(
			'What is Japan\'s largest island?',
			'Honshu',
			'Kyuushu',
			'Shikoku',
			'Hokkaido'
		),
		new Question(
			'What is Japan\'s largest island?',
			'Honshu',
			'Kyuushu',
			'Shikoku',
			'Hokkaido'
		),
		new Question(
			'What is Japan\'s largest island?',
			'Honshu',
			'Kyuushu',
			'Shikoku',
			'Hokkaido'
		),*/
	];

	$('body').on('click', '.answer', function(){
		// Only let user click once
		if($(this).parent().hasClass('open')){
			// Check the clicked question against the correct answer
			currentQobj.check($(this));
		}
	});

	$('.btn-restart').on('click', function(){
		// Refresh the page
		restartQuiz($(this).attr('id'));
	});

});