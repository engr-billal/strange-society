import Discord from '../assets/Discord.png'
import Opensea from '../assets/Opensea.png'
import Twitter from '../assets/Twitter.png'

const Footer = () => {
	return (
		<div className="footer">
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

			<h2>Stange Society 2022</h2>
		</div>
	)
}

export default Footer
