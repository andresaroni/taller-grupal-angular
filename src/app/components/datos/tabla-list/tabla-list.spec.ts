import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaList } from './tabla-list';

describe('TablaList', () => {
  let component: TablaList;
  let fixture: ComponentFixture<TablaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
