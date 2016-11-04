<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Japanese Trivia Game</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<link rel="stylesheet" href="assets/css/style.css">

</head>
<body>
	<header class="site-header">
		<div class="container">
			<h1 class="page-title">日本のトリビアゲーム</h1>
			<h2 class="translate">Japanese Trivia Game</h2>
		</div>
	</header>
	<section id="startgame" class="section container bookend">
		<h2>Welcome!</h2>
		<div class="intro">
			<p>This quiz will test your knowledge of Japanese culture. Try your best to answer each question. Don't worry about getting it wrong &mdash; we'll correct you. Try again until you can get them all right. Don't bother memorizing the order of the answers &mdash; it's been randomized. The point here is to learn!</p>
		</div>
		<button id="start" class="btn-restart">Start Game</button>
	</section>
	<section id="quiz" class="section container noshow">
		<div class="section-title">
			<h2 id="question">Question</h2>
			<h3 class="question-count">Question <span id="qnum">0</span> of <span id="qtotal">0</span></h3>
		</div>
		<div class="row row-sm-eq-height">
			<div class="col-sm-4 col-sm-push-8">
				<div class="timer vcenter">
					<div id="question-timer" class="">
						<h4>Time Left<span class="secs"><span id="q-time-left"></span> secs</span></h4>
					</div>
					<div id="next-timer" class="noshow">
						<h4>Next Question in<span class="secs"><span id="n-time-left"></span> secs</span></h4>
					</div>
				</div>
			</div>
			<div class="col-sm-8 col-sm-pull-4">
				<div class="answers">
					<ol id="options">
					</ol>
				</div>
			</div>
	</section>
	<section id="endscreen" class="section container noshow bookend">
		<h2>Game over!</h2>
		<h3>Here are your results</h3>
		<div class="results">
			<ul>
				<li class="result correct">Questions answered correctly: <span id="num-correct"></span></li>
				<li class="result wrong">Questions answered incorrectly: <span id="num-wrong"></span></li>
				<li class="result">Questions skipped: <span id="num-skipped"></span></li>
			</ul>
		</div>
		<button id="restart" class="btn-restart">Restart?</button>
	</section>

	<!-- Call jQuery and game JS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="assets/javascript/app.js"></script>

	<!-- Latest compiled and minified JavaScript for Bootstrap -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</body>
</html>