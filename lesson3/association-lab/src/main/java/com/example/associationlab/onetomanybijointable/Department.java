package com.example.associationlab.onetomanybijointable;

import jakarta.persistence.*;

import java.util.List;

//@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

    @OneToMany
    private List<Employee> employees;
}
