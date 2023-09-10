const useSumm = +prompt("Введите налоговую сумму:");
const oneProcent = 13;
const twoProcent = 20;
const threeProcent = 30;
if (useSumm < 15000) {
	console.log("Сумма не облагается налогом");
} else if (useSumm >= 15000) {
	const SummOne = useSumm / 100 * oneProcent;
	console.log(SummOne);
} else if (useSumm >= 30000) {
	const SummeTwo = useSumm / 100 * twoProcent;
	console.log(SummeTwo);
} else if (useSumm >= 50000) {
  const SummeThree = useSumm / 100 *threeProcent;
  console.log(SummeThree);
}