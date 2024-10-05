package com.example.springdatademo.service;

import com.example.springdatademo.model.Customer;
import com.example.springdatademo.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> findCustomerByFirstName(String firstName) {
        return customerRepository.findByFirstname(firstName);
    }
}
