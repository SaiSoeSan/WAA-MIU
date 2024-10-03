package com.example.associationlab.onetomanyunijoincol;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

//@Entity
public class Reservation {
    @Id
    private Long id;
    private String reservationNumber;
    private String reservationDate;
}
