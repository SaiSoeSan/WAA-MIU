package com.example.lab1.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;


@Getter
@AllArgsConstructor
public class Book {
    private Integer id;
    private String title;
    private String isbn;
}
