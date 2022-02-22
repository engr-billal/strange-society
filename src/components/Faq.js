import FaqImg from '../assets/FaqImg.png'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react'

const Faq = () => {
	const QuestionsAnswerArray = [
		{
			id: 0,
			question: 'WHEN IS THE OFFICIAL LAUNCH ?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},
		{
			id: 1,
			question: 'WHAT WILL BE THE MINT PRICE ?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},

		{
			id: 2,
			question: 'HOW DO I GET WHITELISTED ?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},
		{
			id: 3,
			question: 'HOW I CAN BUY A Strange SOCIETY NFT ?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},
		{
			id: 4,
			question: 'HOW CAN I VIEW MY NFT?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},
		{
			id: 5,
			question: 'WHY Strange SOCIETY NFT ?',
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic type",
		},
	]

	const [clicked, setClicked] = useState(false)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null)
		}
		setClicked(index)
	}
	return (
		<div className="faq">
			<div className="faq_title">
				<img src={FaqImg} alt="FaqImg" />
			</div>

			<div className="questions_container">
				{QuestionsAnswerArray.map((item, index) => (
					<div className="faqs_container">
						<div className="item_container" onClick={() => toggle(index)} key={index}>
							<div className="question">
								<h4>{item.question}</h4>
								<div className="icon_container">{clicked === index ? <FiMinus className="icon" /> : <FiPlus className="icon" />}</div>
							</div>
							{clicked === index ? (
								<div className="answer_dropdown">
									<p>{item.answer}</p>
								</div>
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Faq
