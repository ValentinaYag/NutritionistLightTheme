import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsContainerComponent } from './testimonials-container.component';

describe('TestimonialsContainerComponent', () => {
  let component: TestimonialsContainerComponent;
  let fixture: ComponentFixture<TestimonialsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
