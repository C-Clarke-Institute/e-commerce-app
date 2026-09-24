import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminProfileEditPage } from "./admin-profile-edit-page";

describe("AdminProfileEditPage", () => {
  let component: AdminProfileEditPage;
  let fixture: ComponentFixture<AdminProfileEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfileEditPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfileEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
