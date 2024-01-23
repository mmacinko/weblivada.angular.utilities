import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetherCalculatorComponent } from './nether-calculator.component';

describe('NetherCalculatorComponent', () => {
  let component: NetherCalculatorComponent;
  let fixture: ComponentFixture<NetherCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetherCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetherCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
