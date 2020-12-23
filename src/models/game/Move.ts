import Piece from "@/models/pieces/Piece";
import Square from "@/models/square/Square";

class Move {

  private _piece: Piece;

  private _destination: Square;

  private _capture: boolean;

  constructor(piece: Piece, destination: Square, capture: boolean) {
    this._piece = piece;
    this._destination = destination;
    this._capture = capture;
  }

  get piece(): Piece {
    return this._piece;
  }

  get destination(): Square {
    return this._destination;
  }

  get capture(): boolean {
    return this._capture;
  }

  get notation(): string {
    return `${this._piece.name}`;
  }
}
export default Move;
