import Header from './components/Header'
import WhyStrangeSociety from './components/WhyStrangeSociety'
import Minting from './components/Minting'
import Roadmap from './components/Roadmap'
import WhatYouWillGet from './components/WhatYouWillGet'
import Faq from './components/Faq'
import Footer from './components/Footer'

import MouseSequence from './assets/MouseSequence.png'

function App() {
	return (
		<div className="App">
			<Header />

			{/* 2nd Section */}
			<WhyStrangeSociety />

			{/* 3rd Section */}
			<Minting />

			<div className="lava_bg">
				<div className="mouse_sequence">
					<img src={MouseSequence} alt="MouseSequence" />
				</div>

				<WhatYouWillGet />
				<Roadmap />
				<Faq />
			</div>

			<Footer />
		</div>
	)
}

export default App
