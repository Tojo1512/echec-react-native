import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ChessPiece({ piece, row, col, onPress, isSelected }) {
  const backgroundColor = (row + col) % 2 === 0 ? "#f0d9b5" : "#b58863";
  
  return (
    <button
      style={[
        styles.square,
        { backgroundColor },
        isSelected && styles.selected
      ]}
      onTap={onPress}
    >
      {piece && (
        <label className="text-2xl">
          {getPieceSymbol(piece.type, piece.color)}
        </label>
      )}
    </button>
  );
}

function getPieceSymbol(type, color) {
  const symbols = {
    king: color === 'white' ? '♔' : '♚',
    queen: color === 'white' ? '♕' : '♛',
    rook: color === 'white' ? '♖' : '♜',
    bishop: color === 'white' ? '♗' : '♝',
    knight: color === 'white' ? '♘' : '♞',
    pawn: color === 'white' ? '♙' : '♟',
  };
  return symbols[type] || '';
}

const styles = StyleSheet.create({
  square: {
    width: 37.5,
    height: 37.5,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#7b61ff",
  },
});