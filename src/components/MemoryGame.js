import React, { Component } from 'react';

class MemoryGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tiles: [
                {val: 0, clickable: true, showing: false},
                {val: 1, clickable: true, showing: false},
                {val: 2, clickable: true, showing: false},
                {val: 3, clickable: true, showing: false},
                {val: 4, clickable: true, showing: false},
                {val: 5, clickable: true, showing: false},
                {val: 0, clickable: true, showing: false},
                {val: 1, clickable: true, showing: false},
                {val: 2, clickable: true, showing: false},
                {val: 3, clickable: true, showing: false},
                {val: 4, clickable: true, showing: false},
                {val: 5, clickable: true, showing: false},
            ],
            text: "",
            firstTurn: null,
        }
    }

    handleClick = (idx) => {
        console.log("clicked", idx);
        const tile = this.state.tiles[idx];
        if(this.state.firstTurn == null){ // FIRST TURN
            this.state.tiles[idx].showing = true;
            return this.setState({firstTurn: {val: tile.val, idx: idx}, tiles: this.state.tiles});
        } else { // SECOND TURN
            if(this.state.firstTurn.val == tile.val && tile.idx != idx){
                this.state.tiles[this.state.firstTurn.idx].showing = true;
                this.state.tiles[this.state.firstTurn.idx].clickable = false;
                this.state.tiles[idx].showing = true;
                this.state.tiles[idx].clickable = false;
                this.setState({firstTurn: null, tiles: this.state.tiles});
            } else {
                this.state.tiles[this.state.firstTurn.idx].showing = true;
                this.state.tiles[idx].showing = true;
                this.setState({tiles: this.state.tiles});
                setTimeout(()=>{
                    this.state.tiles[this.state.firstTurn.idx].showing = false;
                    this.state.tiles[idx].showing = false;
                    this.setState({firstTurn: null, tiles: this.state.tiles});
                }, 500);
            }
        }
    }

    render() { 
        console.log(this.state.tiles);
        
        const tiles = this.state.tiles.map( (tile, index) => {
            return  (
                <div 
                    key={index}
                    className={`
                        tile 
                        ${tile.showing ? '' : 'covered-tile'}
                    `}
                    onClick={ () => {
                        if(tile.clickable) this.handleClick(index)
                    }}
                >
                    {tile.val}
                </div>
            );
        })
        console.log(tiles);
        return (
            <div>
                <h1>Memory Game</h1>
                <div className="tiles">
                    {tiles}
                </div>
                <h3>{this.state.text}</h3>
                <button onClick={this.startGameCountdown}>Start Game</button>
            </div>
        )
    }
}

export default MemoryGame;