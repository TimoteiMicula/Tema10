import React, {Component} from 'react'
import Board from './Bord'

export default class Game extends Component {
   
    render () {
        return  <div className="game">
        <div>X,O Game</div>
        <Board/>
        </div>
    }

}