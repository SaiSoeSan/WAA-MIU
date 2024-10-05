package com.example.springdatademo.repository;

import com.example.springdatademo.model.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    List<Customer> findByFirstname(String firstname);

    List<Customer> findByShop_Name(String shop_Name);
}
