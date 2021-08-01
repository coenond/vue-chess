import Move from "@/models/moves/Move";
import { ListInterface } from "./ListInterface";
import { Node } from "./Node";

export class MoveHistory implements ListInterface<Move> {
  private _head: Node<Move> | null = null;

  public insertInBegin(move: Move): Node<Move> {
    const node: Node<Move> = new Node(move);

    // Set as head if there is non yet.
    if (!this._head) {
      this._head = node;
      return node;
    }

    this._head.prev = node;
    node.next = this._head;
    this._head = node;

    return node;
  }

  insertAtEnd(move: Move): Node<Move> {
    const node: Node<Move> = new Node(move);

    if (!this._head) {
      this._head = node;
      return node;
    }

    const lastNode = this.getLast(this._head);

    node.prev = lastNode;
    lastNode.next = node;

    return node;
  }

  deleteNode(node: Node<Move>): void {
    const prevNode = node.prev;

    if (!prevNode) {
      this._head = node.next;
    } else {
      prevNode.next = node.next;
    }
  }

  traverse(): Move[] {
    const moves: Move[] = [];

    // List is empty
    if (!this._head) {
      return moves;
    }

    // Recursively add the moves to the array
    const addToMovesArray = (node: Node<Move>): Move[] => {
      moves.push(node.data);
      return node.next ? addToMovesArray(node.next) : moves;
    };
    return addToMovesArray(this._head);
  }

  size(): number {
    return this.traverse().length;
  }

  getLastMove(): Move | null {
    if (!this._head) {
      return null;
    }
    const lastNode: Node<Move> = this.getLast(this._head);
    return lastNode.data;
  }

  private getLast(node: Node<Move>): Node<Move> {
    return node.next !== null
      ? this.getLast(node.next)
      : node;
  }
}
