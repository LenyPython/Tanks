import Game from './Game'

const canvas = document.getElementById('main') as HTMLCanvasElement
canvas.width = 600
canvas.height = 600
const btn = document.querySelector('button')
const ctx = canvas.getContext('2d')
if(!ctx) throw new Error('Couldn\'t get canvas')

let MULTIPLAYER = true
let GAME = new Game(ctx, canvas, MULTIPLAYER)

btn?.addEventListener('click', () => {
		GAME = new Game(ctx, canvas, MULTIPLAYER)
		GAME.animate()
})



