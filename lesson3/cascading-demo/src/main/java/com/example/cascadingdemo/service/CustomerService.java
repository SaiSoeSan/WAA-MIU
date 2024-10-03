package com.example.cascadingdemo.service;

import com.example.cascadingdemo.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CustomerService {
    Customer saveCustomer(Customer customer);

    List<Customer> getAllCustomers();

    Optional<Customer> findCustomerById(int id);
}
