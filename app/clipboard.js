const textArea = document.createElement('textarea')
document.body.appendChild(textArea)

let timeout = null

const clipboard = {
	copy: text => {
		// Clear all selection
		getSelection().removeAllRanges()

		// Update text
		textArea.value       = text
		textArea.textContent = text

		// Select all content
		textArea.select()

		// Copy to clipboard
		document.execCommand('copy')

		document.body.classList.add('copied')

		if (timeout) clearTimeout(timeout)

		timeout = setTimeout(ts => document.body.classList.remove('copied'), 3000)
	}
}

export default clipboard