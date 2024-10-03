package com.example.inheritancelab.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;

@Entity
@Data
@DiscriminatorValue("book")
public class Book extends Product {
    private String title;
}
