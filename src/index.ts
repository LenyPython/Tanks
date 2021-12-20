import {Player} from './Tanks'

const canvas = document.getElementById('main')
canvas.width = 600
canvas.height = 600
const btn = document.querySelector('button')
const ctx = canvas.getContext('2d')
const player = new Player(ctx, 200, 500)

const getRandom = () => Math.floor(Math.random() * 100)

console.log(player)
btn.addEventListener('click', () => {
	player.draw(getRandom)

})
