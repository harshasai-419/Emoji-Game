import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, selectedList: [], isPlay: true}

  decideScore = id => {
    const {selectedList} = this.state
    const res = selectedList.every(each => each !== id)
    if (res === true) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        selectedList: [...prevState.selectedList, id],
      }))
    } else {
      this.setState(prevState => ({
        isPlay: false,
      }))
    }
  }

  playAgain = score => {
    this.setState(prevState => ({
      isPlay: true,
      score: 0,
      selectedList: [],
      topScore:
        prevState.score > prevState.topScore
          ? prevState.score
          : prevState.topScore,
    }))
  }

  render() {
    // const {emojisList} = this.props
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const newEmojisList = shuffledEmojisList()
    const {score, topScore, isPlay} = this.state
    return isPlay && score !== 12 ? (
      <div className="bg-container">
        <div>
          <NavBar isPlay={isPlay} score={score} topScore={topScore} />
        </div>
        <div className="total-con">
          <ul className="unordered-list">
            {newEmojisList.map(each => {
              return (
                <EmojiCard
                  emoji={each}
                  key={each.id}
                  decideScore={this.decideScore}
                />
              )
            })}
          </ul>
        </div>
      </div>
    ) : (
      <div className="bg-container2">
        <NavBar isPlay={isPlay} score={score} topScore={topScore} />
        <div className="res-con">
          <WinOrLoseCard score={score} playAgain={this.playAgain} />
        </div>
      </div>
    )
  }
}

export default EmojiGame
