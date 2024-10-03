package com.example.associationlab.onetoonbi;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

//@Entity
public class Major {
    @Id
    private int id;
    private String majorName;
    private String majorCode;

    @OneToOne(mappedBy = "major")
    private Student student;
}
