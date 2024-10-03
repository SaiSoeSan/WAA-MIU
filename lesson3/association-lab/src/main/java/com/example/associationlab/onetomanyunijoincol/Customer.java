package com.example.associationlab.onetomanyunijoincol;

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
    @JoinColumn(name = "cust_id")
    private List<Reservation> reservations;
}
