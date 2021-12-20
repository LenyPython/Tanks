interface keyInterface extends Object{
	UP: string
	DOWN: string
	LEFT: string
	RIGHT: string
	FIRE: string
}

const keySet1: keyInterface = {
	UP: 'w',
	DOWN: 's',
	LEFT: 'a',
	RIGHT: 'd',
	FIRE: 'f'
}
const keySet2: keyInterface = {
	UP: 'i',
	DOWN: 'k',
	LEFT: 'j',
	RIGHT: 'l',
	FIRE: ';'
}

export {
	keyInterface,
	keySet1,
	keySet2
}
