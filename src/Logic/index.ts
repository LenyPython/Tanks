import {DIRECTION, Player} from "../Tanks"
import {keyInterface} from '../constants'


const checkPlayerMovement = (
	key: string,
	player: Player,
	keyMap: keyInterface) => {
	switch(key){
		case keyMap.UP:
			player.isMoving = true
			player.direction = DIRECTION.UP
			break
		case keyMap.DOWN:
			player.isMoving = true
			player.direction = DIRECTION.DOWN
			break
		case keyMap.LEFT:
			player.isMoving = true
			player.direction = DIRECTION.LEFT
			break
		case keyMap.RIGHT:
			player.isMoving = true
			player.direction = DIRECTION.RIGHT
			break
	}
}
const stopPlayer = (
	key: string,
	player: Player,
	keyMap: keyInterface) => {
		if(Object.values(keyMap).includes(key)) player.isMoving = false
}


export {
	keyInterface,
	stopPlayer,
	checkPlayerMovement
}
