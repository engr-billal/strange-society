import HeaderBg from '../assets/HeaderBg.png'
import Navbar from './Navbar'

const Header = () => {
	return (
		<div className="header" id="header">
			<div className="header_bg">
				<img src={HeaderBg} alt="headerbg" />
			</div>

			<Navbar />
		</div>
	)
}

export default Header
