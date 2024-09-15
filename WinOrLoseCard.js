import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const head = score === 12 ? 'You Won' : 'You Lose'
  const para = score === 12 ? 'Best Score' : 'Score'
  const altCon = score === 12 ? 'win' : 'lose'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const getBackToPlay = () => {
    playAgain(score)
  }
  return (
    <div className="res-card">
      <div>
        <h1>{head}</h1>
        <p className="res-para">
          {para}
          <br />
          <span className="res-score">{score}/12</span>
        </p>
        <button className="res-button" onClick={getBackToPlay}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="res-image" alt={altCon} />
    </div>
  )
}

export default WinOrLoseCard
