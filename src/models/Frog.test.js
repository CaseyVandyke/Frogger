import Frog from './Frog';
import { UP, DOWN, LEFT, RIGHT } from '../constants';

describe('Frog Model', () => {
	describe('Movement', () => {
		let frog;

		it('should decrease y when calling move(UP)', () => {
			frog = new Frog({ x: 0, y: 5 });
			frog.move(UP);
			expect(frog.getX()).toBe(0);
			expect(frog.getY()).toBe(4);
		});

		it('should increase y when calling move(DOWN)', () => {
			frog = new Frog({ x: 0, y: 5 });
			frog.move(DOWN);
			expect(frog.getX()).toBe(0);
			expect(frog.getY()).toBe(6);
		});

		it('should decrease x when calling move(LEFT)', () => {
			frog = new Frog({ x: 8, y: 5 });
			frog.move(LEFT);
			expect(frog.getX()).toBe(7);
			expect(frog.getY()).toBe(5);
		});

		it('should increase x when calling move(RIGHT)', () => {
			frog = new Frog({ x: 8, y: 5 });
			frog.move(RIGHT);
			expect(frog.getX()).toBe(9);
			expect(frog.getY()).toBe(5);
		});

		// TODO: Set bounds, if goes of board (x: -1 || width +1 is dead, y: 0 is win, height + 1 is dead)
	});
});
