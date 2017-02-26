import { Component, Input } from '@angular/core';
import { Hand } from '../../domain/hand';
const HAND_COORDINATES = {
    "Rock" : "175, 75, 60",
    "Paper" : "275, 155, 60",
    "Scissors" : "240, 275, 60",
    "Lizard" : "110, 275, 60",
    "Spock" : "75, 155, 60",
};


@Component({
    selector: 'hand-selector',
    templateUrl: './hand-selector.component.html',
    styleUrls: ['./hand-selector.component.css']
})
export class HandSelectorComponent {
    hands : Hand[] = Hand.list.filter((hand)=>hand.id);
    handCoordinates = HAND_COORDINATES;

    @Input()
    public onSelect: Function;

    @Input()
    public startGame: Function;
}
