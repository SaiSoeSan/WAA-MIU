package com.example.inheritancelab.complexMapping;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Embeddable
public class Payment {
    private String paydate;
    private double amount;
}
