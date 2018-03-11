import { greet } from './greet';

describe('great', () => {
    it('should include the name in the message', () => {
        expect(greet('Allan')).toContain('Allan');
    });
});