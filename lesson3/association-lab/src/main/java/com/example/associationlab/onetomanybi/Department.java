package com.example.associationlab.onetomanybi;

import jakarta.persistence.*;

import javax.print.attribute.standard.MediaSize;
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
