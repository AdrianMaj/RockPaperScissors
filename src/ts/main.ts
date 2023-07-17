// RULES
const rulesBtn = document.querySelector('.rules-btn')
const rulesModal = document.querySelector('.rules-modal')
const closeModalBtn = document.querySelector('.rules-modal__close-btn')

//GAME
const gameSection = document.querySelector('.game')
const gameBackground: HTMLElement = document.querySelector('.game__background')!
const gameText = document.querySelectorAll('.game__text')
const gameHouse: HTMLElement = document.querySelector('.game__house')!
let selectedIcon: HTMLElement
const gameIcons = document.querySelectorAll('.game__icon')
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
}
const closeModal = () => {
	rulesModal?.classList.remove('active')
}
//GAME
gameIcons.forEach(icon => {
	icon.addEventListener('click', e => {
		selectedIcon = e.target as any
		selectedIcon.classList.add('selected')
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
					}
				})
			}
		})
		setTimeout(() => {
			gameHouse.classList.remove('game__house')
			gameHouse.classList.add(randomHouse())
			const playerNumber: number = Number(selectedIcon.getAttribute('data-id'))
			resultBox.classList.add('visible')
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
			}
			// 0 - paper
			// 1 - scissors
			// 2 - rock
		}, 1000)
	})
})
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
//RESULT
resultBtn.addEventListener('click', refreshPage)
