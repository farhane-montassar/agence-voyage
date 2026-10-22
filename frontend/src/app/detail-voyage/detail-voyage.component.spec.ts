import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVoyageComponent } from './detail-voyage.component';

describe('DetailVoyageComponent', () => {
  let component: DetailVoyageComponent;
  let fixture: ComponentFixture<DetailVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
