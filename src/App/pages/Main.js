import { useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import './Main.css'
import mainData from '../components/mainData'
import Button from '../components/heroButtons'
import Article from '../components/featureCard'
import Testimonial from '../components/testimonial'

function Main() {
	const [heroProps] = useState(mainData.hero)
	const [buttons, setActive] = useState(mainData.buttons)
	const [articles, setArticle] = useState(mainData.articles[0])
	const [testimonials] = useState(mainData.testimonials)

	function setButtonActive(key) {
		const scrollToArticle = document.getElementById('main-article')
		scrollToArticle.scrollIntoView()

		setActive((prevActive) => {
			return prevActive.map((button, index) => {
				if (key === index) {
					setArticle(mainData.articles[index])
				}
				return button.key === key ?
          { ...button, active: true } : { ...button, active: false }
			})
		})
	}

	const buttonElements = buttons.map((buttonProps) => (
		<Button
			key={buttonProps.key}
			label={buttonProps.label}
			aria={buttonProps.aria}
			active={buttonProps.active}
			setactive={() => setButtonActive(buttonProps.key)}
		/>
	))

	const tstElements = testimonials.map((tstProps) => (
		<Testimonial
      key={tstProps.key}
      quote={tstProps.quote}
      source={tstProps.source} 
    />
	))

	return (
		<main className="content-container flex">
			<section className="hero flex">
				<div className="hero-splash-image" style={{ backgroundImage: `url(${heroProps.img})` }}></div>
				<div className="hero-title flex">
					<h2>{heroProps.title1}</h2>
					<h1>{heroProps.title2}</h1>
				</div>
				<h3 id="hero-title-sub">{heroProps.title3}</h3>
				<p>{heroProps.p1}</p>
				<p>{heroProps.p2}</p>
				<div className="hero-slogan flex">
					<h2>{heroProps.title2}</h2>
					<h4>{heroProps.slogan}</h4>
				</div>
				<div className="hero-buttons flex">{buttonElements}</div>
			</section>

			<Article
				key={articles.key}
				style={{ backgroundImage: `url(${articles.img})` }}
				title={articles.title}
				description={articles.description}
			/>

			<Zoom cascade damping={0.2} duration={1100} triggerOnce={true} className="testimonial-container">
				{tstElements}:
			</Zoom>
		</main>
	)
}

export default Main
