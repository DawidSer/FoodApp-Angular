import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AdminUsersList } from './admin-users-list';

describe('AdminUsersList', () => {
  let component: AdminUsersList;
  let fixture: ComponentFixture<AdminUsersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersList],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUsersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
