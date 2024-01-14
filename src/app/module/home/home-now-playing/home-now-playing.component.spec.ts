import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNowPlayingComponent } from './home-now-playing.component';

describe('HomeNowPlayingComponent', () => {
  let component: HomeNowPlayingComponent;
  let fixture: ComponentFixture<HomeNowPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNowPlayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
