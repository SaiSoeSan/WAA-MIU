package com.example.associationlab.q2;

import jakarta.persistence.*;

//@Entity
public class Book {
    @Id
    private int id;
    private String title;
    private String author;
    private String isbn;

    @ManyToOne
    @JoinColumn(name = "pub_id")
    //default column name is publisher_id
    private Publisher publisher;
}
