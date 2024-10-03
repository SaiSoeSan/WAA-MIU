package com.example.associationlab.onetomanybijointable;

import jakarta.persistence.*;

//@Entity
public class Employee {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String email;

    //@ManyToOne
//    @JoinTable(name = "dept_employee",
//    joinColumns = {@JoinColumn(name = "emp_id")},
//    inverseJoinColumns = {@JoinColumn(name = "dept_id")})
//    private Department department;
}
