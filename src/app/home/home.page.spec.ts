import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('change num', () => {
    const buttonUp = fixture.debugElement.query(By.css('#button_up'));
    const buttonDown = fixture.debugElement.query(By.css('#button_down'));
    buttonUp.nativeElement.click();
    expect(component.counter).toBe(1);
    expect(component.showNumber).toBe('01');
  });
});
