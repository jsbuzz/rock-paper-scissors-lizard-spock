import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HandSelectorComponent } from './components/hand-selector/hand-selector.component';
import { SheldonComponent } from './components/sheldon/sheldon.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          HandSelectorComponent,
          SheldonComponent,
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock Paper Scissors');
  }));

  it('should render hand-selector', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('hand-selector').length).toBeTruthy();
  }));

  it('should render sheldon', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('sheldon').length).toBeTruthy();
  }));
});
