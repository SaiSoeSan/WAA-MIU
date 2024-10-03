package com.example.inheritancelab.complexMapping;

import jakarta.persistence.*;

@Entity
public class Appointment {
    @Id
    private long id;
    private String appdate;

    @OneToOne
    @JoinColumn(name = "patient")
    private Patient patient;

    @OneToOne
    @JoinColumn(name = "doctor")
    private Doctor doctor;

    @Embedded
    private Payment payment;
}
