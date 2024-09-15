import './index.css'

const NavBar = props => {
  const {score, topScore, isPlay} = props
  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-game"
          alt="emoji logo"
        />
        <h1 className="nav-head">Emoji Game</h1>
      </div>
      {isPlay && score !== 12 ? (
        <div className="right-nav">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
