package com.example.springdatademo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

    @ManyToOne(cascade = CascadeType.ALL)
    private Shop shop;
}
