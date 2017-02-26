import { TestBed } from '@angular/core/testing';
import { SheldonComponent } from './sheldon.component';

describe('SheldonComponent', () => {
    let component:    BannerComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SheldonComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should represent state parameter', () => {
        const fixture = TestBed.createComponent(SheldonComponent);
        component = fixture.componentInstance;
        component.state = "thinking";
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.sheldon').className).toContain(component.state);
    });
});
