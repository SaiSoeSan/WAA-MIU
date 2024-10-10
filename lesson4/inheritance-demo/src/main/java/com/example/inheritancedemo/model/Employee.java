package com.example.inheritancedemo.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Employee {
    @EmbeddedId
    private Name name;
    private LocalDate startDate;

    @OneToMany(mappedBy = "owner")
    private List<Project> projects = new ArrayList<>();
}
