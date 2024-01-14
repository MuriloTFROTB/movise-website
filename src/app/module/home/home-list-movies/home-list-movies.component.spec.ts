import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListMoviesComponent } from './home-list-movies.component';

describe('HomeListMoviesComponent', () => {
  let component: HomeListMoviesComponent;
  let fixture: ComponentFixture<HomeListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
