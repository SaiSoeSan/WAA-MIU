package com.example.associationlab.q4;

import jakarta.persistence.Id;

//@Entity
public class Reservation {
    @Id
    private Long id;
    private String reservationNumber;
    private String reservationDate;
}
