import {TestBed, fakeAsync, ComponentFixture} from '@angular/core/testing';
import {ShoppingEditComponent} from "./shopping-edit.component";
import {FormsModule} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";

describe('Shopping Edit Component Test', () => {
  let fixture: ComponentFixture<ShoppingEditComponent>;
  let comp: ShoppingEditComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppingEditComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        ShoppingListService
      ]
    });

    fixture = TestBed.createComponent(ShoppingEditComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create Shopping Edit Component', () => {
    expect(comp).toBeTruthy();
  });

  // it('', () => {
  //
  // });
});
