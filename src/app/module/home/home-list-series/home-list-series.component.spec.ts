import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListSeriesComponent } from './home-list-series.component';

describe('HomeListSeriesComponent', () => {
  let component: HomeListSeriesComponent;
  let fixture: ComponentFixture<HomeListSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListSeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeListSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
