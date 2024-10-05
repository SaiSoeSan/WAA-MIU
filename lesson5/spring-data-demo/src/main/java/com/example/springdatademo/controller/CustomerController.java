package com.example.springdatademo.controller;

import com.example.springdatademo.model.Customer;
import com.example.springdatademo.model.Shop;
import com.example.springdatademo.repository.CustomerRepository;
import com.example.springdatademo.repository.ShopRepository;
import com.example.springdatademo.service.CustomerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
@NoArgsConstructor
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ShopRepository shopRepository;

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        Long shopId = customer.getShop().getId();
        System.out.println("shop id " + shopId);
        if(shopId != null) {
            Shop shop = shopRepository.findById(shopId).get();
            customer.setShop(shop);
            return customerService.createCustomer(customer);
        }
        return customerService.createCustomer(customer);
    }


    //find customer by firstname
//    @GetMapping
//    public List<Customer> getCustomerByFirstName(@RequestParam(required = true) String firstName) {
//        return customerService.findCustomerByFirstName(firstName);
//    }

    @GetMapping
    public List<Customer> getCustomerByShopName(@RequestParam(required = true) String shop_name
    ) {
        return customerRepository.findByShop_Name(shop_name);
    }
}
