import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemMultiple } from './sidebar-item-multiple';

describe('SidebarItemMultiple', () => {
  let component: SidebarItemMultiple;
  let fixture: ComponentFixture<SidebarItemMultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarItemMultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarItemMultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
