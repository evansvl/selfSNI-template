document.addEventListener('DOMContentLoaded', () => {
	const customAlert = document.getElementById('custom-alert')
	const closeAlertButton = document.getElementById('close-alert')

	const showCustomAlert = () => {
		customAlert.style.display = 'flex'
	}

	const hideCustomAlert = () => {
		customAlert.style.display = 'none'
	}

	closeAlertButton.addEventListener('click', hideCustomAlert)

	document.getElementById('login-form').addEventListener('submit', event => {
		event.preventDefault()
		showCustomAlert()
	})

	document
		.querySelector('.forgot-password')
		.addEventListener('click', event => {
			event.preventDefault()
			showCustomAlert()
		})

	document
		.querySelector('.social-btn.google')
		.addEventListener('click', event => {
			event.preventDefault()
			showCustomAlert()
		})

	document
		.querySelector('.social-btn.facebook')
		.addEventListener('click', event => {
			event.preventDefault()
			showCustomAlert()
		})

	document.querySelector('.signup-link a').addEventListener('click', event => {
		event.preventDefault()
		showCustomAlert()
	})
})
