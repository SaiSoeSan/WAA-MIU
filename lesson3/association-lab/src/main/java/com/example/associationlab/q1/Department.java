package com.example.associationlab.q1;

import jakarta.persistence.*;

import java.util.List;

//@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

    //mappedBy mean nothing does in my side
    @OneToMany(mappedBy = "dept")
    private List<Employee> employees;
}
