import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustoberComponent } from './add-custober.component';

describe('AddCustoberComponent', () => {
  let component: AddCustoberComponent;
  let fixture: ComponentFixture<AddCustoberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustoberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustoberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
