import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDestinationComponent } from './gestion-destination.component';

describe('GestionDestinationComponent', () => {
  let component: GestionDestinationComponent;
  let fixture: ComponentFixture<GestionDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
