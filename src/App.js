import { useState } from "react";
import "./App.scss";
import LogoImage from "./assets/logo.png";
import Button from "./components/button/Button";
import Board from "./components/board/Board";
import { random } from "./utils/Utils";

function App() {
	const [myDiceHistory, setMyDiceHistory] = useState([]);
	const [otherDiceHistory, setOtherDiceHistory] = useState([]);

	const handleRollClick = () => {
		setMyDiceHistory([...myDiceHistory, random(6)]);
		setOtherDiceHistory([...otherDiceHistory, random(6)]);
	};

	const handleClearClick = () => {
		setMyDiceHistory([]);
		setOtherDiceHistory([]);
	};

	const calculateWinner = () => {
		const myDiceTotal = myDiceHistory.reduce((a, b) => a + b, 0);
		const otherDiceTotal = otherDiceHistory.reduce((a, b) => a + b, 0);

		if (myDiceTotal > otherDiceTotal) {
			return "my";
		} else if (myDiceTotal < otherDiceTotal) {
			return "other";
		} else {
			return "";
		}
	};

	return (
		<div className="app">
			<div>
				<img
					className="app-logo"
					src={LogoImage}
					alt="주사위게임 로고"
				/>
				<h1 className="app-title">주사위 게임!</h1>
				<div>
					<Button
						onClick={handleRollClick}
						className="button blue app-button"
					>
						던지기
					</Button>
					<Button
						onClick={handleClearClick}
						className="button red app-button"
					>
						처음부터
					</Button>
				</div>
			</div>
			<div className="app-boards">
				<Board
					className={`app-board ${
						calculateWinner() === "my" ? "board-winner" : ""
					}`}
					name="나"
					color="blue"
					diceHistory={myDiceHistory}
				></Board>
				<Board
					className={`app-board ${
						calculateWinner() === "other" ? "board-winner" : ""
					}`}
					name="상대"
					color="red"
					diceHistory={otherDiceHistory}
				></Board>
			</div>
		</div>
	);
}

export default App;
