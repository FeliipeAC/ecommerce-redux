import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagamentoComponent } from './form-pagamento.component';

describe('FormPagamentoComponent', () => {
  let component: FormPagamentoComponent;
  let fixture: ComponentFixture<FormPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
