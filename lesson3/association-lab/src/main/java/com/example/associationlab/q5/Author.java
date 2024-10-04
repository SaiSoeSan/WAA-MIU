package com.example.associationlab.q5;

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
