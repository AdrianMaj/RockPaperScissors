// RULES
const rulesBtn = document.querySelector('.rules-btn')
const rulesModal = document.querySelector('.rules-modal')
const closeModalBtn = document.querySelector('.rules-modal__close-btn')
const rulesBackground: HTMLElement = document.querySelector('.rules-background')!

//GAME
const gameSection: HTMLElement = document.querySelector('.game')!
const gameBackground: HTMLElement = document.querySelector('.game__background')!
const gameText = document.querySelectorAll('.game__text')
const gameHouse: HTMLElement = document.querySelector('.game__house')!
let selectedIcon: HTMLElement
const gameIcons = document.querySelectorAll('.game__icon')
const gameContainer: HTMLElement = document.querySelector('.game__container')!
const housePhoto: HTMLElement = document.querySelector('.game__house-photo')!
//RESULT
const resultBox: HTMLElement = document.querySelector('.result')!
const resultBtn: HTMLElement = document.querySelector('.result__play-again-btn')!
const resultText: HTMLElement = document.querySelector('.result__text')!
const scoreValueElement: HTMLElement = document.querySelector('.score__value')!

// 0 - paper
// 1 - scissors
// 2 - rock
let houseNumber: number
let score: number = Number(sessionStorage.getItem('score'))
if (Number(sessionStorage.getItem('score')) > 0) {
	scoreValueElement.textContent = sessionStorage.getItem('score')
}
// RULES
const showModal = () => {
	rulesModal?.classList.add('active')
	rulesBackground.classList.add('background-visible')
}
const closeModal = () => {
	rulesModal?.classList.remove('active')
	rulesBackground.classList.remove('background-visible')
}
//GAME
const handleGame = (e: Event) => {
	selectedIcon = e.target as any
	selectedIcon.classList.add('selected')
	selectedIcon.removeEventListener('click', handleGame)
	gameHouse.removeEventListener('click', handleGame)
	selectedIcon.style.margin = '0 auto'
	gameHouse.style.margin = '0 auto'
	gameIcons.forEach(icon => {
		if (!icon.classList.contains('selected')) {
			const iconElement = icon as HTMLElement
			iconElement.style.display = 'none'
			gameBackground.style.display = 'none'
			gameText.forEach(text => {
				if (text.parentElement?.style.display != 'none') {
					const textElement = text as HTMLElement
					textElement.style.display = 'block'
					gameHouse.style.display = 'flex'
					gameSection.style.gridTemplateColumns = '1fr 2fr 2fr 1fr'
					gameSection.style.gridTemplateRows = '1fr 1.2fr'
				}
			})
		}
	})
	setTimeout(() => {
		gameHouse.classList.remove('game__house')
		gameHouse.classList.add(randomHouse())
		if (gameHouse.classList.contains('game__paper')) {
			housePhoto.style.display = 'block'
			housePhoto.setAttribute('src', '/RockPaperScissors/dist/assets/icon-paper-90d57903.svg')
		} else if (gameHouse.classList.contains('game__scissors')) {
			housePhoto.style.display = 'block'
			housePhoto.setAttribute('src', '/RockPaperScissors/dist/assets/icon-scissors-f778df73.svg')
		} else if (gameHouse.classList.contains('game__rock')) {
			housePhoto.style.display = 'block'
			housePhoto.setAttribute('src', '/RockPaperScissors/dist/assets/icon-rock-e16feca1.svg')
		}
		const playerNumber: number = Number(selectedIcon.getAttribute('data-id'))
		resultBox.classList.add('visible')
		gameSection.classList.add('gap')
		// gameSection.style.gridTemplateColumns = '1fr 2fr 2fr 2fr 1fr'
		// const houseIcon: HTMLElement = document.querySelector('.game__house-position')!
		// houseIcon.style.gridColumn = '4/5'
		if (
			(houseNumber == 0 && playerNumber == 0) ||
			(houseNumber == 1 && playerNumber == 1) ||
			(houseNumber == 2 && playerNumber == 2)
		) {
			resultText.textContent = 'draw'
		} else if (
			(houseNumber == 0 && playerNumber == 2) ||
			(houseNumber == 1 && playerNumber == 0) ||
			(houseNumber == 2 && playerNumber == 1)
		) {
			resultText.textContent = 'you lose'
			if (score > 0) {
				score--
			}
			sessionStorage.setItem('score', `${score}`)
			const circle = document.createElement('div')
			circle.classList.add('circle-effect')
			gameHouse.appendChild(circle)
			setTimeout(() => {
				gameHouse.removeChild(circle)
			}, 2000)
		} else if (
			(houseNumber == 0 && playerNumber == 1) ||
			(houseNumber == 1 && playerNumber == 2) ||
			(houseNumber == 2 && playerNumber == 0)
		) {
			resultText.textContent = 'you win'
			if (score <= 99) {
				score++
			}
			sessionStorage.setItem('score', `${score}`)
			const circle = document.createElement('div')
			circle.classList.add('circle-effect')
			selectedIcon.appendChild(circle)
			setTimeout(() => {
				selectedIcon.removeChild(circle)
			}, 2000)
		}
		// 0 - paper
		// 1 - scissors
		// 2 - rock
	}, 1000)
}
const refreshPage = () => {
	location.reload()
}
const randomHouse = () => {
	const number = Math.floor(Math.random() * 3)
	const selectedSign = gameIcons[number]
	houseNumber = number
	return selectedSign.classList[0]
}
//RULES
rulesBtn?.addEventListener('click', showModal)
closeModalBtn?.addEventListener('click', closeModal)
//GAME
gameIcons.forEach(icon => {
	icon.addEventListener('click', handleGame)
})
//RESULT
resultBtn.addEventListener('click', refreshPage)
