import MintingBg from '../assets/MintingBg.png'
import MintingDateBox from '../assets/MintingDateBox.png'
import CCTVRight from '../assets/CCTVRight.png'
import FrameEye from '../assets/FrameEye.png'
import BrainJar from '../assets/BrainJar.png'
import RoadmapImg from '../assets/RoadmapImg.png'
import FrameNft from '../assets/FrameNft.png'
import MintCard from '../assets/MintCard.png'
import MintButton from '../assets/MintButton.png'

import ComputerSequence from '../assets/ComputerSequence.png'
import ComputerSequenceLight from '../assets/ComputerSequenceLight.png'

// import ComputerSequence from '../assets/ComputerSequence.webm'
import { motion } from 'framer-motion'
import { LightOnOff } from '../animations'

const Minting = () => {
	return (
		<motion.div initial="hide" animate="show" className="minting_section">
			<div className="minting_bg">
				<img src={MintingBg} alt="MintingBg" />
			</div>

			<div className="minting_date_box">
				<img src={MintingDateBox} alt="MintingDateBox" />
			</div>

			<a href="#roadmap" className="roadmap_img">
				<img src={RoadmapImg} alt="RoadmapImg" />
			</a>

			<div className="cctv_right">
				<img src={CCTVRight} alt="CCTVRight" />
			</div>

			<div className="frame_eye">
				<img src={FrameEye} alt="FrameEye" />
			</div>

			<div className="brain_jar">
				<img src={BrainJar} alt="BrainJar" />
			</div>

			<div className="frame_nft_row">
				<img src={FrameNft} alt="FrameNft" />
				<img src={FrameNft} alt="FrameNft" />
				<img src={FrameNft} alt="FrameNft" />
			</div>

			<div className="mint_card_section">
				<div className="mint_card">
					<img src={MintCard} alt="MintCard" />
				</div>

				<button className="mint_button">
					<img src={MintButton} alt="MintButton" />
				</button>
			</div>

			<div className="computer_sequence">
				<img src={ComputerSequence} alt="ComputerSequence" />
			</div>

			<motion.div variants={LightOnOff} className="computer_sequence_light">
				<img src={ComputerSequenceLight} alt="ComputerSequenceLight" />
			</motion.div>
		</motion.div>
	)
}

export default Minting
