import { TestBed } from '@angular/core/testing';
import { HandSelectorComponent } from './hand-selector.component';
import { Hand } from '../../domain/hand';

describe('HandSelectorComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HandSelectorComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should render all hands', () => {
        const fixture = TestBed.createComponent(HandSelectorComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('area').length).toEqual(Hand.list.length - 1);
    });

    it('should render elements correctly', () => {
        const fixture = TestBed.createComponent(HandSelectorComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const rockElement = compiled.querySelector('area:first-child');
        expect(rockElement.alt).toEqual("Rock");
        expect(rockElement.title).toEqual("Rock");
        expect(rockElement.shape).toEqual("circle");
    });
});
