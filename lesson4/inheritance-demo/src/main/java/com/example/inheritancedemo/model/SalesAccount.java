package com.example.inheritancedemo.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("salesaccount")
public class SalesAccount extends Account {
    private double apy;
}
