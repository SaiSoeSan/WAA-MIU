package com.example.inheritancelab.complexMapping;

import jakarta.persistence.*;

@Entity
@SecondaryTable(name = "address",pkJoinColumns = {
        @PrimaryKeyJoinColumn(name = "patient_id", referencedColumnName = "id")
})
public class Patient {
    @Id
    private long id;
    private String name;

    @Column(table = "address")
    private String street;
    @Column(table = "address")
    private String zip;
    @Column(table = "address")
    private String city;
}
