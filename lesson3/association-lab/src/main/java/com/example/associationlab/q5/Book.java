package com.example.associationlab.q5;


import jakarta.persistence.Id;

//@Entity
public class Book {
    @Id
    private int id;
    private String title;
    private int year;
    private int pages;
}
