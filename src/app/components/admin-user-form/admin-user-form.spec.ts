import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AdminUserForm } from './admin-user-form';

describe('AdminUserForm', () => {
  let component: AdminUserForm;
  let fixture: ComponentFixture<AdminUserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserForm],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
