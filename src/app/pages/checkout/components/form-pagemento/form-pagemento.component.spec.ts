import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagementoComponent } from './form-pagemento.component';

describe('FormPagementoComponent', () => {
  let component: FormPagementoComponent;
  let fixture: ComponentFixture<FormPagementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
