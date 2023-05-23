'use strict'

let tabItem = document.querySelectorAll('.tabs__button-item')
let tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function (item) {
	item.addEventListener('click', open)
})

function open(event) {
	let tabTarget = event.currentTarget
	let button = tabTarget.dataset.button

	tabItem.forEach(function (element) {
		element.classList.remove('tabs__button-item--active')
	})

	tabContent.forEach(function (element) {
		element.classList.remove('tabs__content-item--active')
	})

	tabTarget.classList.add('tabs__button-item--active')
	document
		.querySelector(`#${button}`)
		.classList.add('tabs__content-item--active')
}

let menuButton = document.querySelector('.menu__button')
let menu = document.querySelector('.menu')

menuButton.addEventListener('click', () => {
	menu.classList.toggle('menu--active')
})
