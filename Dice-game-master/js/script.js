$(document).ready(function() {
	let score = 0;
	let globalScore = 0;
	let globalScore2 = 0;
	let iCurrentScore = $('.current-score-no');
	let iCurrentScore2 = $('.current-score-no2');
	let scoreBox = $('.score-points');
	let scoreBox2 = $('.score-points2');
	let leftCol = $('.game-col-left');
	let rightCol = $('.game-col-right');
	let player = $('.player');
	let player2 = $('.player2');
	let onMove = 1;
	let firstPlayer = prompt('NAME OF FIRST PLAYER?');
	let secondPlayer = prompt('NAME OF SECOND PLAYER');
	player.text(firstPlayer);
	player2.text(secondPlayer);

	// 1st PLAYER ROLL DICE
	function rollDice() {
		leftCol.addClass('gray');
		player.addClass('player-title');

		let randomNu = Math.floor(Math.random() * 6) + 1;
		$('.dice').attr('src', 'images/dice-' + randomNu + '.png');

		if (randomNu != 1) {
			score += randomNu;
			currentScore = score;
			iCurrentScore.text(score);

			function holdScore() {
				globalScore = iCurrentScore;
				$('.score-box p').text(globalScore.text());
			}
		} else {
			score = 0;
			iCurrentScore.text(score);
			currentScore2 = score;
			leftCol.removeClass('gray');
			player.removeClass('player-title');
			onMove = 2;
		}
	}
	//2nd PLAYER ROLL DICE
	function rollDice2() {
		rightCol.addClass('gray');
		player2.addClass('player-title2');

		let randomNu = Math.floor(Math.random() * 6) + 1;
		$('.dice').attr('src', 'images/dice-' + randomNu + '.png');

		if (randomNu != 1) {
			score += randomNu;
			currentScore2 = score;
			iCurrentScore2.text(score);

			function holdScore2() {
				globalScore = iCurrentScore2;
				$('.score-box p').text(globalScore.text());
			}
		} else {
			score = 0;
			iCurrentScore2.text(score);
			rightCol.removeClass('gray');
			player2.removeClass('player-title2');
			onMove = 1;
		}
	}
	//WHO PLAY
	$(document.body).on('click', '.roll-dice', function() {
		if (onMove == 1) {
			rollDice();
		} else {
			rollDice2();
		}
	});
	// STORE SCORE
	$(document.body).on('click', '.hold-dice', function() {
		if (onMove == 1) {
			globalScore += score;
			scoreBox.text(globalScore);
			let newScore = parseInt(scoreBox.text());
			if (newScore >= 30) {
				alert(player.text() + ' WON!');
			}
			iCurrentScore.text('0');
			score = 0;
			leftCol.removeClass('gray');
			player.removeClass('player-title');
			onMove = 2;
		} else {
			globalScore2 += score;
			scoreBox2.text(globalScore2);
			let newScore2 = parseInt(scoreBox2.text());
			if (newScore2 >= 30) {
				alert(player2.text() + ' WON!');
			}
			iCurrentScore2.text('0');
			score = 0;
			rightCol.removeClass('gray');
			player2.removeClass('player-title2');
			onMove = 1;
		}
	});
	//START NEW GAME
	$(document.body).on('click', '.new-game', function() {
		scoreBox.text('0');
		scoreBox2.text('0');
		iCurrentScore.text('0');
		iCurrentScore2.text('0');
		$('.dice').attr('src', 'images/dice-1.png');
	});
});
