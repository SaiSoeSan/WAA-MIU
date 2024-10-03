package com.example.associationlab.onetomanyuni;

import jakarta.persistence.Id;

//@Entity
public class Reservation {
    @Id
    private Long id;
    private String reservationNumber;
    private String reservationDate;
}
