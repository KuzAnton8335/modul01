const gameModule = (() => {
	let playerBalls = 5;
	let botBalls = 5;


	const getPlayerBalls = () => {
		return playerBalls;
	}

	const getBotBalls = () => {
		return botBalls;
	}

	const playRound = (guess) => {
		const playerGuess = parseInt(prompt("Введите число от 1 до " + playerBalls));
		const botGuess = Math.floor(Math.random() * 2) + 1;

		if (playerGuess % 2 === botGuess % 2) {
			botBalls += playerBalls;
			playerBalls = 0;
		} else {
			playerBalls += botBalls;
			botBalls = 0;
		}
		checkGameOver();
	}

	const checkGameOver = () => {
		if (playerBalls === 0) {
			alert("Вы проиграли! У вас закончились шарики.");
		} else if (botBalls === 0) {
			alert("Вы выиграли! У бота закончились шарики.");
		}
	}

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
})();
window.gameModule();

console.log("У вас на старте:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота на старте:", gameModule.getBotBalls(), "шариков");

gameModule.playRound();
console.log("У вас осталось:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота осталось:", gameModule.getBotBalls(), "шариков");

gameModule.restartGame();
console.log("У вас на старте:", gameModule.getPlayerBalls(), "шариков");
console.log("У бота на старте:", gameModule.getBotBalls(), "шариков");
