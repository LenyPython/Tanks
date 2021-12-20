import {DIRECTION, Player} from "../Tanks"
import {keyInterface} from '../constants'


const checkPlayerMovement = (
	key: string,
	player: Player) => {
	const { UP, DOWN, LEFT, RIGHT } = player.keySet
	switch(key){
		case UP:
			player.isMoving = true
			player.direction = DIRECTION.UP
			break
		case DOWN:
			player.isMoving = true
			player.direction = DIRECTION.DOWN
			break
		case LEFT:
			player.isMoving = true
			player.direction = DIRECTION.LEFT
			break
		case RIGHT:
			player.isMoving = true
			player.direction = DIRECTION.RIGHT
			break
	}
}
const stopPlayer = (
	key: string,
	player: Player) => {
		const KEYS = Object.values(player.keySet)
		if(KEYS.includes(key)) player.isMoving = false
}

export {
	keyInterface,
	stopPlayer,
	checkPlayerMovement
}
