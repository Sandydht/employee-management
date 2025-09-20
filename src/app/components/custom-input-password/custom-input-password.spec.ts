import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputPassword } from './custom-input-password';

describe('CustomInputPassword', () => {
  let component: CustomInputPassword;
  let fixture: ComponentFixture<CustomInputPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
