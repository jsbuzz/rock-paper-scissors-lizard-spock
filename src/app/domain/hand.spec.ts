import {Rock, Paper, Scissors, Lizard, Spock} from './hand';

describe('Rock', () => {
    it('should beat Scissors and Lizard', () => {
        expect(Rock.beats(Scissors)).toBeTruthy();
        expect(Rock.beats(Lizard)).toBeTruthy();
    });
});

describe('Paper', () => {
    it('should beat Rock and Spock', () => {
        expect(Paper.beats(Rock)).toBeTruthy();
        expect(Paper.beats(Spock)).toBeTruthy();
    });
});

describe('Scissors', () => {
    it('should beat Paper and Lizard', () => {
        expect(Scissors.beats(Paper)).toBeTruthy();
        expect(Scissors.beats(Lizard)).toBeTruthy();
    });
});

describe('Lizard', () => {
    it('should beat Paper and Spock', () => {
        expect(Lizard.beats(Paper)).toBeTruthy();
        expect(Lizard.beats(Spock)).toBeTruthy();
    });
});

describe('Spock', () => {
    it('should beat Paper and Lizard', () => {
        expect(Spock.beats(Rock)).toBeTruthy();
        expect(Spock.beats(Scissors)).toBeTruthy();
    });
});
