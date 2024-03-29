import './SingleCard.css'

function SingleCard({ card, handleChoice, flipped, disabled}) {

	//här vill vi uppdatera state i choiseOne eller two i app.js
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card)
		}
	}

  return (
    <div className="card"> 
        <div className={flipped ? "flipped" : ""}>
        	<img className="front" src={card.src} alt="card front"/> {/** front side */}
        	<img className="back" 
				src="/img/cover.png" 
				onClick={handleClick}
				alt="card back" 
			/>
        </div>
    </div>
  )
}

export default SingleCard