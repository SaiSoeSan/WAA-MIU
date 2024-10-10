package com.example.inheritancedemo.model;

import jakarta.persistence.*;

@Entity
public class Project {
    @Id
    private int id;
    private String name;

    @OneToMany
    @ManyToOne
    @ManyToMany
    @JoinColumns({
            @JoinColumn(name = "emp_firstname",referencedColumnName = "firstname"),
            @JoinColumn(name = "emp_lastname",referencedColumnName = "lastname")
    })
    private Employee owner;
}
