import './index.css'

const EmojiCard = props => {
  const {emoji, decideScore, key} = props
  const {id, emojiUrl, emojiName} = emoji
  console.log(key)
  const getScore = () => {
    decideScore(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-button">
        <img
          src={emojiUrl}
          className="emoji-image"
          onClick={getScore}
          alt={emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
