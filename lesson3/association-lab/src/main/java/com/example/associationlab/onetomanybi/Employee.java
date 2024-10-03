package com.example.associationlab.onetomanybi;

import jakarta.persistence.*;

import javax.print.attribute.standard.MediaSize;

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
