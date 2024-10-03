package com.example.inheritancelab.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.aot.generate.GeneratedTypeReference;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstname;
    private String lastname;

    @OneToMany(mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();
}
