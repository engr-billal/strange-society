import WhyStrangeSocietyBg from '../assets/WhyStrangeSocietyBg.png'
import SkullTopLayer from '../assets/SkullTopLayer.png'
import CCTV from '../assets/CCTV.png'
import DeskLeft from '../assets/DeskLeft.png'
import Egg from '../assets/Egg.png'
import WhySocietyLeftBoard from '../assets/WhySocietyLeftBoard.png'
import MembershipRightSection from '../assets/MembershipRightSection.png'
import Light from '../assets/Light.png'
import Rope from '../assets/Rope.png'

import { motion } from 'framer-motion'

import { LightOnOff, ShakeEgg } from './../animations/index'

const WhyStrangeSociety = () => {
	return (
		<motion.div initial="hide" animate="show" id="mint" className="why_strange_society">
			<div className="bg">
				<img src={WhyStrangeSocietyBg} alt="WhyStrangeSocietyBg" />
			</div>

			<div className="top_skull_img">
				<img src={SkullTopLayer} alt="SkullTopLayer" />
			</div>

			<motion.div variants={LightOnOff} className="light">
				<img src={Light} alt="Light" />
			</motion.div>

			<div className="content">
				<div className="left">
					<div className="cctv_img">
						<img src={CCTV} alt="cctv" />
					</div>

					<div className="desk_left">
						<img src={DeskLeft} alt="DeskLeft" />
					</div>

					<motion.div variants={ShakeEgg} className="egg">
						<img src={Egg} alt="Egg" />
					</motion.div>

					<div className="why_society_left_board">
						<img src={WhySocietyLeftBoard} alt="WhySocietyLeftBoard" />
					</div>
				</div>

				<div className="right">
					<div className="membership_section_imgs">
						<img src={MembershipRightSection} alt="MembershipRightSection" />
					</div>

					<div className="rope">
						<img src={Rope} alt="Rope" />
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default WhyStrangeSociety
