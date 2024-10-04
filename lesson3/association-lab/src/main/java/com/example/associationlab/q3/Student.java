package com.example.associationlab.q3;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Student {
    @Id
    private int id;
    private String name;

    @ManyToMany(mappedBy = "students")
//    @JoinTable(name = "student_course",
//    joinColumns = {@JoinColumn(name = "stude_id")},
//    inverseJoinColumns = {@JoinColumn(name = "course_id")})
    private List<Course> courses;
}
