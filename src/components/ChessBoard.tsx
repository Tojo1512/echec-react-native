import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ChessPiece } from "./ChessPiece";

const BOARD_SIZE = 8;

export function ChessBoard() {
  const [board, setBoard] = React.useState(initializeBoard());
  const [selectedPiece, setSelectedPiece] = React.useState(null);
  const [currentPlayer, setCurrentPlayer] = React.useState('white');

  function initializeBoard() {
    const newBoard = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    // Initialize pawns
    for (let i = 0; i < BOARD_SIZE; i++) {
      newBoard[1][i] = { type: 'pawn', color: 'black' };
      newBoard[6][i] = { type: 'pawn', color: 'white' };
    }
    // Initialize other pieces
    const backRow = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    for (let i = 0; i < BOARD_SIZE; i++) {
      newBoard[0][i] = { type: backRow[i], color: 'black' };
      newBoard[7][i] = { type: backRow[i], color: 'white' };
    }
    return newBoard;
  }

  function handlePiecePress(row, col) {
    if (selectedPiece) {
      // Move logic here
      const newBoard = [...board];
      newBoard[row][col] = selectedPiece;
      newBoard[selectedPiece.row][selectedPiece.col] = null;
      setBoard(newBoard);
      setSelectedPiece(null);
      setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
    } else if (board[row][col] && board[row][col].color === currentPlayer) {
      setSelectedPiece({ ...board[row][col], row, col });
    }
  }

  return (
    <gridLayout rows="repeat(8, auto)" columns="repeat(8, auto)" style={styles.board}>
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <ChessPiece
            key={`${rowIndex}-${colIndex}`}
            piece={piece}
            row={rowIndex}
            col={colIndex}
            onPress={() => handlePiecePress(rowIndex, colIndex)}
            isSelected={selectedPiece && selectedPiece.row === rowIndex && selectedPiece.col === colIndex}
          />
        ))
      )}
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    backgroundColor: "#deb887",
  },
});