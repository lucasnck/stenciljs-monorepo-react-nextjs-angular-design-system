import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLibraryComponent } from './ds-library.component';

describe('DsLibraryComponent', () => {
  let component: DsLibraryComponent;
  let fixture: ComponentFixture<DsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
