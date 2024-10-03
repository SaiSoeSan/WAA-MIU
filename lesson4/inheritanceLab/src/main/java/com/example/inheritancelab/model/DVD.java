package com.example.inheritancelab.model;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

import javax.print.attribute.standard.Media;

@Entity
@Data
@DiscriminatorValue("dvd")
public class DVD extends Product {
    private String genre;
}
