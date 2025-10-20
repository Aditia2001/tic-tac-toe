import "./App.css";
import { useState } from "react"; //hook. logic yang bisa re-use. bedanya sama function biasa, useState ini bisa dipake di hooks lainnya
import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import calculateWinner from "./utils/calculateWinner";
import Timeline from "./components/Timeline";

function App() {
  // const [isXNext, setIsXNext] = useState(false);

  // const [board, setBoard] = useState(Array(9).fill(null)); //buat array isi 9 dengan isi null

  const [timeline, setTimeline] = useState([
    {
      isXNext: false,
      board: Array(9).fill(null),
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  //const board = timeline[timeline.length - 1].board; //last item of timeline buat ambil indeks 0, karena timeline hanya array length = 1. intinya ambil last value
  const board = timeline[currentStep].board;
  const isXNext = timeline[currentStep].isXNext;
  const winner = calculateWinner(board);
  // console.log("ini timeline", timeline);
  // console.log("ini timeline length", timeline.length - 1);
  // console.log("ini board", board);
  // console.log("ini isXnext", isXNext);
  // const handleResetGameClick = () => {
  //   // setBoard(Array(9).fill(null));
  //   // setIsXNext(false);
  // };

  const handleSquareClick = (index) => {
    if (winner) return;

    const newBoard = [...board];

    if (newBoard[index]) {
      //kalau newboard index nya ada
      return newBoard;
    }

    newBoard[index] = isXNext ? "X" : "O"; // ini setBoard akan menggantikan nilai dari board jadi dari newBoard board dibuang ganti ke newBoard
    // setIsXNext(!isXNext);
    setTimeline([
      ...timeline.slice(0, currentStep + 1),
      { board: newBoard, isXNext: !isXNext },
    ]);

    setCurrentStep(currentStep + 1);
    // setBoard((currBoard) => {
    //   const newBoard = [...currBoard];

    //   if (newBoard[index]) {
    //     //kalau newboard index nya ada
    //     return newBoard;
    //   }

    //   newBoard[index] = isXNext ? "X" : "O"; // ini setBoard akan menggantikan nilai dari board jadi dari newBoard board dibuang ganti ke newBoard
    //   setIsXNext(!isXNext);
    //   return newBoard;
    // });
    console.log("kliked");
  };

  const handelTimelineItemClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <GameInfo
          winner={winner}
          isXNext={isXNext}
          // onReset={handleResetGameClick}
        />
        <Timeline
          currentStep={currentStep}
          timeline={timeline}
          onTimelineItemClick={handelTimelineItemClick}
        />
      </div>
    </div>
  );
}

export default App;
