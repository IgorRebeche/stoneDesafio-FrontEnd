import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserFormComponent } from './modal-user-form.component';

describe('ModalUserFormComponent', () => {
  let component: ModalUserFormComponent;
  let fixture: ComponentFixture<ModalUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
