import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('increment()', () => {
    it('waits 500ms to increment on single click', fakeAsync(() => {
      const component = TestBed.createComponent(AppComponent).componentInstance;

      component.increment();
      expect(component.count).toEqual(0);
      tick(250);
      expect(component.count).toEqual(0);
      tick();
      expect(component.count).toEqual(1);
    }));

    it('ignores multiple clicks less than 500ms apart', fakeAsync(() => {
      const component = TestBed.createComponent(AppComponent).componentInstance;

      component.increment();
      tick(250);
      component.increment();
      tick(250);
      component.increment();
      tick(250);
      component.increment();
      tick();
      expect(component.count).toEqual(1);
    }));
  });

});
