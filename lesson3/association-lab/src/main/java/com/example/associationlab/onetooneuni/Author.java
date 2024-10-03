package com.example.associationlab.onetooneuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

//@Entity
public class Author {
    @Id
    private int id;
    private String firstName;
    private String lastName;

    @OneToOne
    private Book book;
}
