import { Component } from '@angular/core';
import { Hand, EmptyHand } from './domain/hand';

const COUNTDOWN_MAX : number = 3;
const COUNTDOWN_MS : number = 500;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title : string = "Rock Paper Scissors Lizard Spock";
    countdown: number = COUNTDOWN_MAX;
    timer: NodeJS.Timer = null;

    playerHand : Hand;
    playerScore : number = 0;
    sheldonHand : Hand;
    sheldonScore : number = 0;
    sheldonState : string = "plays";

    onSelect(hand : Hand) : void {
        this.playerHand = hand;
    }

    startGame(): void {
        if(this.timer) {
            return ;
        }
        this.sheldonState = "thinking";
        this.playerHand = null;
        this.sheldonHand = null;
        this.countdown = COUNTDOWN_MAX;
        this.countDownStep();
    }

    countDownStep() {
        if(--this.countdown < 0) {
            this.countdown = COUNTDOWN_MAX;
            this.checkScore();
        } else {
            this.title = (1 + this.countdown).toString();
            this.timer = setTimeout(() => this.countDownStep(), COUNTDOWN_MS);
        }
    }

    checkScore(): void {
        this.timer = null;
        this.sheldonHand = Hand.draw();
        this.playerHand || (this.playerHand = EmptyHand);
        if(this.playerHand.beats(this.sheldonHand)) {
            this.playerScore++;
            this.title = "You won! " + this.playerHand.beatString(this.sheldonHand);
            this.sheldonState = "looses";
        } else if(this.playerHand === this.sheldonHand) {
            this.title = "Huhh, that's a draw!";
        } else {
            this.sheldonScore++;
            this.title = "Sheldon wins! " + this.sheldonHand.beatString(this.playerHand);
            this.sheldonState = "wins";
        }
    }
}
