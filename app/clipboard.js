const textArea = document.createElement('textarea')
document.body.appendChild(textArea)

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
	}
}

export default clipboard