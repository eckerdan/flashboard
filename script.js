const date = document.getElementById('date'),
	  time = document.getElementById('time'),
	  name = document.getElementById('name'),
	  bgControl = document.getElementById('bg-control'),
	  lesson = document.getElementById('lesson')

let bg = false

// function getTime() {
// 	let d = new Date(),
// 		h = d.getHours(),
// 		// mil = d.getMilliseconds(),
// 		min = ('0'+d.getMinutes()).slice(-2),
// 		s = d.getSeconds()

// 	// return `${ h }:${ min }:${ s }:${ mil }`
// 	return `${ h }:${ min }:${ s }`
// }

const getTime = () => `${ new Date().getHours() }:${ ('0'+new Date().getMinutes()).slice(-2) }:${ ('0'+new Date().getSeconds()).slice(-2) }`



// function getDate() {
// 	let d = new Date(),
// 		day = d.getDate(),
// 		m = d.getMonth(),
// 		y = d.getFullYear()

// 	return `${ day }.${ m }.${ y }`
// }

const getDate = () => `${ new Date().getDate() }.${ new Date().getMonth() }.${ new Date().getFullYear() }`



window.addEventListener('load', ()=>{
	time.innerHTML = getTime()
	date.innerHTML = getDate()

	if(typeof(localStorage.name) === 'undefined')
		name.innerHTML = '[enter name]'
	else
		name.innerHTML = localStorage.name

	if(typeof(localStorage.lesson) === 'undefined')
		lesson.innerHTML = '[enter lesson]'
	else
		lesson.innerHTML = localStorage.lesson

	setInterval(()=>{
		time.innerHTML = getTime()
	}, 1000)

	name.addEventListener('keyup', ()=>{
		localStorage.name = name.innerHTML
	})

	lesson.addEventListener('keyup', ()=>{
		localStorage.lesson = lesson.innerHTML
	})

	bgControl.addEventListener('click', ()=>{
		if(bg) {
			document.body.classList.remove('bg')
			bgControl.classList.add('fa-eye-slash')
			bgControl.classList.remove('fa-eye')
		} else {
			document.body.classList.add('bg')
			bgControl.classList.remove('fa-eye-slash')
			bgControl.classList.add('fa-eye')
		}
		bg = !bg
	})
})