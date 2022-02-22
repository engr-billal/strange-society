import Paper from '../assets/Paper.png'
import JoinTheClub from '../assets/JoinTheClub.png'

const WhatYouWillGet = () => {
	return (
		<div className="what_you_will_get">
			<div className="paper">
				<img src={Paper} alt="Paper" />
			</div>

			<a href="#roadmap">
				<img src={JoinTheClub} alt="JoinTheClub" />
			</a>
		</div>
	)
}

export default WhatYouWillGet
