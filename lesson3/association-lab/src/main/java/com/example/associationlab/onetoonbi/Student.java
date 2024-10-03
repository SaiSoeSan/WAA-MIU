package com.example.associationlab.onetoonbi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

//@Entity
public class Student {
    @Id
    private int id;
    private String name;
    private String surname;
    private String email;

    @OneToOne
    private Major major;
}
