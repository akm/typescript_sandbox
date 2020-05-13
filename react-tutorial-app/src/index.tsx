import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type Value = 'X' | 'O' | null

type SquareProps = {
    value: Value;
    onClick: () => void;
}
type SquareState = {
    value: string | null;
}
class Square extends React.Component<SquareProps, SquareState> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()} >
                {this.props.value}
            </button>
        );
    }
}

type BoardProps = {
}
type BoardState = {
    squares: Value[]
}

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            squares: Array<Value>(9).fill(null),
        };
    }

    renderSquare(i: number) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
