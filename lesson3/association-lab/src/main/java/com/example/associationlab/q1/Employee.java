package com.example.associationlab.q1;

import jakarta.persistence.*;

//@Entity
public class Employee {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String email;

    @ManyToOne
    @JoinColumn(name = "dep_id")
    private Department dept;
}
