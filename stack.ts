const logos: NodeListOf<HTMLImageElement> = document.querySelectorAll('.logos-img')
const logoDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll('.logos-info-container')

logos.forEach((logo: HTMLImageElement, index: number) => {
	let show = false

	logo.addEventListener('click', () => {
		show = !show
		show ? (logoDiv[index].style.visibility = 'visible') : (logoDiv[index].style.visibility = 'hidden')
	})

	logo.addEventListener('mouseover', () => {
		logoDiv[index].style.visibility = 'visible'
	})

	logo.addEventListener('mouseout', () => {
		if (!show) logoDiv[index].style.visibility = 'hidden'
	})
})
