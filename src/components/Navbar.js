import Logo from '../assets/Logo.png'
import ConnectWalletBtn from '../assets/ConnectWalletBtn.png'
import Discord from '../assets/Discord.png'
import Opensea from '../assets/Opensea.png'
import Twitter from '../assets/Twitter.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<div className="links">
				<ul className="section_links">
					<li>
						<a href="#roadmap">Roadmap</a>
					</li>
					<li>
						<a href="#faq">faq</a>
					</li>
					<li>
						<a href="#mint">mint</a>
					</li>
					<li>
						<a href="#stake">stake</a>
					</li>
				</ul>

				<ul className="social_links">
					<li>
						<a href="#twitter">
							<img src={Twitter} alt="img" />
						</a>
					</li>
					<li>
						<a href="#discord">
							<img src={Discord} alt="img" />
						</a>
					</li>
					<li>
						<a href="#opensea">
							<img src={Opensea} alt="img" />
						</a>
					</li>
				</ul>
			</div>

			<button className="connect_btn">
				<img src={ConnectWalletBtn} alt="ConnectWalletBtn" />
			</button>
		</div>
	)
}

export default Navbar
