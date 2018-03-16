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

  describe('Test with timeouts', () => {
    it('waits 500ms to increment on single click', (done) => {
      const component = TestBed.createComponent(AppComponent).componentInstance;

      component.increment();
      setTimeout(() => {
        expect(component.count).toEqual(0);
        setTimeout(() => {
          expect(component.count).toEqual(1);
          done();
        }, 251);
      }, 250);
    });

    it('ignores multiple clicks less than 500ms apart', (done) => {
      const component = TestBed.createComponent(AppComponent).componentInstance;

      component.increment();
      setTimeout(() => {
        component.increment();
        setTimeout(() => {
          component.increment();
          setTimeout(() => {
            component.increment();
            setTimeout(() => {
              expect(component.count).toEqual(1);
              done();
            }, 501);
          }, 250);
        }, 250);
      }, 250);
    });
  });

  describe('Test with fakeAsync()', () => {
    it('waits 500ms to increment on single click', fakeAsync(() => {
      const component = TestBed.createComponent(AppComponent).componentInstance;

      component.increment();
      expect(component.count).toEqual(0);
      tick(250);
      expect(component.count).toEqual(0);
      tick(251);
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
      tick(501);
      expect(component.count).toEqual(1);
    }));
  });

});
