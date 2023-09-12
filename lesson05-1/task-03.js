const reversString = () => {
	const str = "Привет Мир";
	const reverse = [...str].reverse().join('');
	console.log(reverse);
}
reversString();
