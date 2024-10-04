package com.example.associationlab.q4;

import jakarta.persistence.*;

import java.util.List;

//@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;

    @OneToMany
    @JoinColumn(name = "customer_id")
//    @JoinTable(name = "cust_reservation",
//    joinColumns = {@JoinColumn(name = "cust_id")},
//    inverseJoinColumns = {@JoinColumn(name = "res_id")})
    private List<Reservation> reservations;
}
