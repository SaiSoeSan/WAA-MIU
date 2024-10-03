package com.example.inheritancelab.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class OrderLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "prod_id")
    private Product product;
}
