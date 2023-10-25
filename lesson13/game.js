

(function () {
	const FIGURE_ENG = ['rock', 'scissors', 'paper'];
	const FIGURE_RU = ['камень', 'ножницы', 'бумага'];

	const getRandomIntInclusive = () => {
		return Math.floor(Math.random() * 3);
	};

	const game = (language) => {
		const result = {
			player: 0,
			computer: 0,
		};

		return function start() {
			const getComputerChoice = () => {
				const FIGURE_RU = ['камень', 'ножницы', 'бумага'];
				const randomIndex = getRandomIntInclusive();
				return FIGURE_RU[randomIndex];
			}

			const getUserChoice = () => {
				return prompt('Выберите: камень, ножницы или бумага');
			}

			const determineWinner = (userChoice, computerChoice) => {
				if (userChoice === computerChoice) {
					return 'Ничья';
				} else if ((userChoice === 'камень' && computerChoice === 'ножницы') ||
					(userChoice === 'ножницы' && computerChoice === 'бумага') ||
					(userChoice === 'бумага' && computerChoice === 'камень')
				) {
					result.player++;
					return 'Вы победили!';
				} else {
					result.computer++;
					return 'Компьютер победил!';
				}
			}

			const choiceGame = () => {
				const userChoice = getUserChoice();

				if (userChoice === null) {
					const confirmExit = confirm('Вы уверены, что хотите выйти?');
					if (confirmExit) {
						alert(`Результат игры: Пользователь: ${result.player} очков, Компьютер: ${result.player} очков`);
						return;
					}
				}
			}

			const computerChoice = getComputerChoice();
			const gameResult = determineWinner(userChoice, computerChoice)

			alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\n${gameResult}`);

			choiceGame();
		}
	}
	window.RPS = game();
})();