
export default class Sprite{
	img: HTMLImageElement
	frame: number
	constructor (public src: string){
		this.frame = 0
		this.img = new Image()
		this.img.src = src
	}
}
