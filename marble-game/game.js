const gameModule = (() => {
	let playerBalls = 5;
	let botBalls = 5;

	const getPlayerBalls = () => {
		return playerBalls;
	}

	const getBotBalls = () => {
		return botBalls;
	}

	const playRound = () => {
		alert(`У вас на старте: ${getPlayerBalls()} шариков`);
		alert(`У бота на старте:${getBotBalls()} шариков`);
		while (playerBalls > 0 && botBalls > 0) {
			const playerGuess = parseInt(prompt("Введите число от 1 до " + playerBalls));
			const botGuess = Math.random() < 0.5 ? 'четное' : 'нечетное';
			if (playerGuess % 2 === 0 && botGuess === 'четное') {
				botBalls += playerGuess;
				playerBalls -= playerGuess;
			} else if (playerGuess % 2 !== 0 && botGuess === 'нечетное') {
				botBalls += playerGuess;
				playerBalls -= playerGuess;
			} else {
				playerBalls += playerGuess;
				botBalls -= playerGuess;
			}
			if (playerBalls === 0) {
				alert("Вы проиграли! У вас закончились шарики.");
			} else if (botBalls === 0) {
				alert("Вы выиграли! У бота закончились шарики.");
			}
			alert(`У вас осталось:, ${gameModule.getPlayerBalls()} шариков`);
		}
		// checkGameOver();
	}

	// const checkGameOver = () => {
	// 	if (playerBalls === 0) {
	// 		alert("Вы проиграли! У вас закончились шарики.");
	// 	} else if (botBalls === 0) {
	// 		alert("Вы выиграли! У бота закончились шарики.");
	// 	}
	// }

	const restartGame = () => {
		playerBalls = 5;
		botBalls = 5;
	}

	return {
		getPlayerBalls: getPlayerBalls,
		getBotBalls: getBotBalls,
		playRound: playRound,
		restartGame: restartGame
	};
	window.gameModule = game;
})();


console.log("У вас на старте:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота на старте:", gameModule.getBotBalls(), "шариков");

gameModule.playRound();
console.log("У вас осталось:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота осталось:", gameModule.getBotBalls(), "шариков");


gameModule.restartGame();
console.log("У вас на старте:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота на старте:", gameModule.getBotBalls(), "шариков");

