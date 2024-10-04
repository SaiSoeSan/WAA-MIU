package com.example.associationlab.q2;

import jakarta.persistence.Id;

//@Entity
public class Publisher {
    @Id
    private int id;

    private String name;
    private String address;
}
