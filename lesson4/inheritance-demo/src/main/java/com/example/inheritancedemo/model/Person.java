package com.example.inheritancedemo.model;


import jakarta.persistence.*;

@Entity
@SecondaryTable(name="address",pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id",referencedColumnName = "id"))
public class Person {
    @Id
    private String id;
    private String name;
    private String surname;
    private int age;

    @Column(table = "address")
    private String city;
    @Column(table = "address")
    private String zip;
    @Column(table = "address")
    private String road;
}
