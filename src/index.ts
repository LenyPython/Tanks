import {Player} from './Tanks'

const canvas = document.getElementById('main') as HTMLCanvasElement
canvas.width = 600
canvas.height = 600
const btn = document.querySelector('button')
const ctx = canvas.getContext('2d')
if(!ctx) throw new Error('Couldn\'t get canvas')
const player = new Player(ctx, 200, 500)

const getRandom = () => Math.floor(Math.random() * 100)

btn?.addEventListener('click', () => {
	player.draw(getRandom)

})
