package com.example.inheritancedemo.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("checkingaccount")
public class CheckingAccount extends Account {
    private double overdraftLimit;
}
