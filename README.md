# Dzonestatemant

- ```
  npm i @ngrx/store --save
  ```
 - ## Customer Interface
  - ```
    export interface Customer {
    name: string = '';
    }
    ```
- ## CustomerAction
  - ```
    import {Action} from '@ngrx/store';
    ```
  - ```
    export enum CustomerActionTypes {
      Add = '[Customer Component] Add',
      Remove = '[Customer Component] Remove'
    }
    ```
  - ```
    export class ActionEx implements Action {
    readonly type;
    payload: any;
    }
    ```
  - ```
    export class AddCustomer implements ActionEx {
     readonly type = CustomerActionTypes.Add;
     constructor(public payload: any){}
    }
    ```
  - ```
    export class RemoveCustomer implements ActionEx {
     readonly type = CustomerActionTypes.Remove;
     constructor(public payload: any){}
    }
    ```
    
- ## CustomerReducer
  - ```
    export const initialStates = [];
    ```
  - ```
    export function CustomerReducer(state=initialStates, action: ActionEx) {
      switch(action.name) {
        case CustomerActionTypes.Add:
        return [...state, action.payload];
        case CustomerActionTypes.Remove:
        return [
           ...state.slice(0, action.payload),
           ...state.slice(action.payload+1)
        ];
        default:
          return state;
      }
    
    }
    ```
- ## CustomerComponent
  - ```
    import { Store, select} from '@ngrx/store';
    ``` 
  - ```
    customers: Observable<Customer[]>;
    ```
  - ```
    constructor(private store: Store<{customers: Customer[]}>{
      this.customers = store.pipe(select('customers'));
    }
    ```
  - ```
    public addCustomer(customerName) {
      const customer = new Customer();
      customer.name = customerName;
      this.store.dispatch(new AddCustomer(customer));
    }
    ```
  - ```
    public removeCustomer(index) {
      this.store.dispatch(new RemoveCustomer(index));
    }
    ```
- ## AppModule
  - ```
    import { StoreModule } from '@ngrx/store';
    import { CustomerReducer} from './customer.reducer';
    ```
  - ```
    import :[
     StoreModule.forRoot({customers: CustomerReducer})
    ]
    ```
- ## customer.component.html
  - ```
    <ul>
      <li * ngFor="let customer of customers | async; let i = index">
        <span>{{customer.name}}</span>
        <button (click)="removeCustomer(i)">Remove</button>
                   </li>
                   </ul>
     ```
   - ```
     <input #name placeholder="Enter customer name"><button (click)="addCustomer(name.value)">Add</button>
     ```
