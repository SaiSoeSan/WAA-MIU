package com.example.associationlab.manytooneunijointable;

import jakarta.persistence.*;

//@Entity
public class Book {
    @Id
    private int id;
    private String title;
    private String author;
    private String isbn;

    @ManyToOne
    @JoinTable(name = "book_publisher",
    joinColumns = {@JoinColumn(name = "book_id")},
    inverseJoinColumns = {@JoinColumn(name = "publisher_id")})
    private Publisher publisher;
}
