package com.example.restfulapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Book {
    private int id;
    private String title;
    private String isbn;
    private double price;
}
