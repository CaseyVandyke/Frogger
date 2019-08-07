import {
	UP,
	LEFT,
	DOWN,
	RIGHT
} from '../constants';

export default class Frog {
	constructor(startingPosition) {
		let {x, y} = startingPosition;
		this.position = {
			x: !isNaN(x) && x > -1 ? x : 8, // based on half of 16
			y: !isNaN(y) && y > -1 ? y : 9 // based on bottom of 9
		}
	}

	getX = () => this.position.x;
	getY = () => this.position.y;

	/**
	 * Have the frog move in a direction, making contact with some other entity, deciding how to react
	 */
	move = direction => {
		// TODO: add interaction code... OR let REACT app handle interaction of models...
		switch (direction) {
			case UP:
				this.position.y -= 1;
				break;
			case LEFT:
				this.position.x -= 1;
				break;
			case DOWN:
				this.position.y += 1;
				break;
			case RIGHT:
				this.position.x += 1;
				break;
			default:
				return console.warn(`You have chosen an invalid direction: ${direction}`);
		}
	}
}