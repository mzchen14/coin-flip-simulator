import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'

class Flipper extends Component {
    static defaultProps = {
        title: 'Coin Flipper',
        coins: [
            { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            { side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=e2d465bcddcd2ed69a1caaae4ac17996571f1b1f-1592620368-0-AUyW57waAgLlyFMFrdYxQ1p4Uoqj8Fjg6NzxX7XM9h-GkSUvVl3B8pwesVxBmAB9ABujkvOAA6NLji_j02_e6jT14HmarA45fSmqip3y2G3hRvTf8uWLqzj44BSmk5_mVgxuMPdKshoLRbr8B2wF4bQVW1zOfgWgKnkIqJk5YfjrfPRQa8eWa40aHo_kMYB1XygxnP4nIRX0zmGQDH1WFc4ZEwPP46F1WgjmA-eQwvJIomOyo6jNip9BS611lFW6DhvJTOb7UrK_KnHU8jpMI4dLnolB7KBKZK-sjjreKXmPDDDKCiPtBk1bgccDGq4qqg' }   
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            curCoin: null, flips:0, heads: 0, tails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flip() {
        const newCoin = choice(this.props.coins)
        this.setState(state => {
            // let newState = {
            //     ...state,
            //     curCoin: newCoin,
            //     flips: state.flips + 1
            // }
            // if(newCoin.side === 'heads') {
            //     newState.heads += 1
            // } else {
            //     newState.tails += 1
            // } //then return newState
            /* Above commented out is a different way to change the state.
               Below is a cleaner way.*/
            return {
                curCoin: newCoin,
                flips: state.flips + 1,
                heads: state.heads + (newCoin.side === 'heads' ? 1 : 0),
                tails: state.tails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }

    handleClick(e) {
        this.flip()
    }

    render() {
        return(
            <div className='Flipper'>
                <h2>{this.props.title}</h2>
                {this.state.curCoin && <Coin face = {this.state.curCoin}/>}
                <button onClick={this.handleClick}>Flip The Coin!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}




export default Flipper