import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidebarComponent } from './saidebar.component';

describe('SaidebarComponent', () => {
  let component: SaidebarComponent;
  let fixture: ComponentFixture<SaidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaidebarComponent]
    });
    fixture = TestBed.createComponent(SaidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
