import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferranceComponent } from './template-referrance.component';

describe('TemplateReferranceComponent', () => {
  let component: TemplateReferranceComponent;
  let fixture: ComponentFixture<TemplateReferranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
