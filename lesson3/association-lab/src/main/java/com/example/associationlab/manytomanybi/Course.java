package com.example.associationlab.manytomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    private int id;
    private String name;
    private String description;
}
