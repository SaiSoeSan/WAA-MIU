package com.example.springdatalab.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Entity
@Data
public class Book {
    @Id
    private long id;
    private String title;
    private String isbn;
    private double price;
}
