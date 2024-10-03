package com.example.associationlab.manytooneunijointable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//@Entity
public class Publisher {
    @Id
    private int id;

    private String name;
    private String address;
}
