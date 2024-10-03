package com.example.associationlab.manytomanybi;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Student {
    @Id
    private int id;
    private String name;

    @ManyToMany
    @JoinTable(name = "student_course",
    joinColumns = {@JoinColumn(name = "stud_id")},
    inverseJoinColumns = {@JoinColumn(name = "course_id")})
    private List<Course> courses;
}
