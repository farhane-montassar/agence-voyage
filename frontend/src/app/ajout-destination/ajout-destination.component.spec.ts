import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDestinationComponent } from './ajout-destination.component';

describe('AjoutDestinationComponent', () => {
  let component: AjoutDestinationComponent;
  let fixture: ComponentFixture<AjoutDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutDestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
