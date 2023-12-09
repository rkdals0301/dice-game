import "./Board.scss";

function Board({ name, color, diceHistory, className }) {
	const diceNumber = diceHistory[diceHistory.length - 1] || 1;
	const imageName = `dice-${color}-${diceNumber}.svg`;
	const diceImage = require(`../../../assets/${imageName}`);

	return (
		<div className={`board ${className}`}>
			<h2 className="board-head">{name}</h2>
			<img
				className="dice"
				src={diceImage}
				alt={`${color} ${diceNumber}`}
			/>
			<h2 className="board-head">기록</h2>
			<p>{diceHistory.join(", ")}</p>
			<h2 className="board-head">총점</h2>
			<p>{diceHistory.reduce((a, b) => a + b, 0)}</p>
		</div>
	);
}

export default Board;
