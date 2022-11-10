import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoberDetailsComponent } from './custober-details.component';

describe('CustoberDetailsComponent', () => {
  let component: CustoberDetailsComponent;
  let fixture: ComponentFixture<CustoberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustoberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
