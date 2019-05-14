import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPrincipalComponent } from './comic-principal.component';

describe('ComicPrincipalComponent', () => {
  let component: ComicPrincipalComponent;
  let fixture: ComponentFixture<ComicPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
