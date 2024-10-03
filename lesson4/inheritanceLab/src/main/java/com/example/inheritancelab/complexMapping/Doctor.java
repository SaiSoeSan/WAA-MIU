package com.example.inheritancelab.complexMapping;

import jakarta.persistence.*;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "type")
    private String doctortype;

    private String firstname;
    private String lastname;
}
