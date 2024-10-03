package com.example.cascadingdemo.controller;

import com.example.cascadingdemo.model.CreditCard;
import com.example.cascadingdemo.model.Customer;
import com.example.cascadingdemo.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerService customerService;
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        //TODO: call service to save customer
        customer = customerService.saveCustomer(customer);
        return customer;
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @DeleteMapping("/{cid}/creditcards/{ccid}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable int cid, @PathVariable int ccid) {
        //find customer
        Optional<Customer> customerOptional = customerService.findCustomerById(cid);

        if(customerOptional.isPresent()){
            Customer customer = customerOptional.get();

            //remove credit cards
            List<CreditCard> creditCards = customer.getCreditCards();
            creditCards.remove(ccid);

            //save customer
            customer = customerService.saveCustomer(customer);

            return ResponseEntity.ok(customer);
        }
        return ResponseEntity.notFound().build();
    }
}
