package com.example.associationlab.onetooneuni;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//@Entity
public class Book {
    @Id
    private int id;
    private String title;
    private int year;
    private int pages;
}
