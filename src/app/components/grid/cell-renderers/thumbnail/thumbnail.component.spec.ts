import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailAgCellRendererComponent } from './thumbnail.component';

describe('ThumbnailAgCellRendererComponent', () => {
  let component: ThumbnailAgCellRendererComponent;
  let fixture: ComponentFixture<ThumbnailAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
