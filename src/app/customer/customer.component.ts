import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CustomerReducer } from '../customer.reducer';
import { RemoveCustomer, AddCustomer } from '../customer-action';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Observable<Customer[]>;
  constructor(private store: Store<{customers: Customer[]}>) {
    this.customers = store.pipe(select('customers'));
  }

  ngOnInit() {
  }

  removeCustomers(index) {
    this.store.dispatch(new RemoveCustomer(index));
  }

  addCustomer(customerName) {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(new AddCustomer(customer));
  }

}
