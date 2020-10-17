import React from 'react';
import './Game.css'
import Cell from "./Cell";

export const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component<any, any>{
    state: {cells: {x: number, y: number, style: any}[], interval: number, isRunning: boolean, frequency: number} = {
        cells: [],
        interval: 100,
        isRunning: false,
        frequency: 20
    }
    saved: boolean[][] = [[]];
    rows: number;
    cols: number;
    board: any;
    boardRef: any;
    timeoutHandler: any
    constructor(props: any) {
        super(props);
        this.rows = HEIGHT/CELL_SIZE;
        this.cols = WIDTH/CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop
        }
    }

    handleClick(event: any) {
        const elemOffSet = this.getElementOffset();
        const offsetX = event.clientX - elemOffSet.x;
        const offsetY = event.clientY - elemOffSet.y;
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY/CELL_SIZE);
        if(x >= 0 && x <= this.cols && y >= 0 && y <= this.rows){
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({
            cells: this.makeCells()
        })
    }
    clear() {
        this.board = this.makeEmptyBoard();
        this.setState({
            cells: this.makeCells()
        })
    }
    makeEmptyBoard() {
        let board: boolean[][] = [];
        for(let y = 0; y < this.rows; y++){
            board.push([]);
            for(let x = 0; x < this.cols; x++){
                board[y][x] = false;
            }
        }
        return board;
    }
    runGame() {
        this.saved = this.board.map((b: boolean[]) => b.slice());
        this.setState({
            isRunning: true
        })
        this.runIteration();
    }
    runIteration() {
        let newBoard = this.makeEmptyBoard();
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                let n = this.getNeighbors(this.board, i, j);
                if(this.board[i][j]){
                    newBoard[i][j] = n === 2 || n === 3;
                }else {
                    if(n === 3){
                        newBoard[i][j] = true;
                    }
                }
            }
        }
        this.board = newBoard;
        this.setState({
            cells: this.makeCells()
        })
        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration()
        }, this.state.interval)
    }
    getNeighbors(board: boolean[][], i: number, j: number){
        let n = [];
        for(let k = -1; k < 2; k++){
            for(let l = -1; l < 2; l++){
                if(k=== 0 && l === 0){
                    continue;
                }
                if(board[i + k]){
                    n.push(board[i+k][j+l]);
                }
            }
        }
        return n.filter(v => v).length;
    }
    stopGame() {
        this.setState({
            isRunning: false
        })
        if(this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    handleIntervalChange(event: any) {
        this.setState({
            interval: event.target.value
        })
    }
    makeCells() {
        let cells = [];
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.cols; x++){
                if(this.board[y][x]){
                    cells.push({x,y, style: {background: "green"}});
                }
            }
        }
        return cells;
    }

    random(){
        let newBoard = this.makeEmptyBoard();
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++){
                let v = Math.floor(Math.random() * Math.floor(100));
                newBoard[i][j] = v < this.state.frequency;
            }
        }
        this.board = newBoard;
        this.setState({
            cells: this.makeCells()
        })
    }
    handleFrequencyChange(event: any){
        this.setState({
            frequency: event.target.value
        })
    }
    undo(){
        this.board = this.saved;
        this.setState({
            cells: this.makeCells()
        })
    }
    render() {
        const {cells} = this.state;
        return (
            <div>
                <div onClick={(e) => this.handleClick(e)} ref={(n) => {this.boardRef = n}} className="Board" style={{width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}>
                    {cells.map((c) => {
                        return (
                            <Cell style={c.style} x={c.x} y={c.y} key={`${c.x},${c.y}`}/>
                        )
                    })}
                </div>
                <div className="controls">
                    Update every <input onChange={(e) => this.handleIntervalChange(e)} value={this.state.interval}/> ms
                    {this.state.isRunning ? <button className="button" onClick={() => this.stopGame()}>Stop</button> :
                        <button className="button" onClick={() => this.runGame()}>Run</button>}
                        <button className="button" onClick={() => this.clear()}>Clear</button>
                        <button className="button" onClick={() => this.undo()}>Undo</button>
                        <button className="button" onClick={() => this.random()}>Random</button>
                        <input onChange={(e) => this.handleFrequencyChange(e)} value={this.state.frequency}/>
                </div>
            </div>
        )
    }
}
export default Game;
