package com.example.inheritancelab.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name="`Order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderid;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "cust_id")
    private Customer customer;

    @OneToMany
    @JoinTable(name = "order_orderline",
    joinColumns = @JoinColumn(name = "order_id"),
    inverseJoinColumns = @JoinColumn(name = "orderline_id"))
    private List<OrderLine> orderLines;
}
