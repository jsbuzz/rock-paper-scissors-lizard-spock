import { Component, Input } from '@angular/core';

@Component({
    selector: 'sheldon',
    templateUrl: './sheldon.component.html',
    styleUrls: ['./sheldon.component.css']
})
export class SheldonComponent {
    @Input()
    public state: string;
}
