package com.example.inheritancedemo.model;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS  )
//@DiscriminatorColumn(name = "account_type",
//discriminatorType = DiscriminatorType.STRING)
public abstract class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;
    private double balance;

}
