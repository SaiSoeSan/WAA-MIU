package com.example.springdatademo.service;

import com.example.springdatademo.model.Customer;
import com.example.springdatademo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {
    //create a new customer
    Customer createCustomer(Customer customer);

    //find customer by firstname
    List<Customer> findCustomerByFirstName(String firstName);
}
