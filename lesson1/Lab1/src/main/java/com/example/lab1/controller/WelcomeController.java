package com.example.lab1.controller;

import com.example.lab1.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WelcomeController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Spring Boot!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Sai";
    }

    @GetMapping("/book")
    public Book book() {
        return new Book(1,"Design Pattern","3456");
    }

    @GetMapping("/books")
    public List<Book> books() {
        Book p1 = new Book(1,"React","34324234");
        Book p2 = new Book(2,"Java","42342343");
        Book p3 = new Book(3,"Design Pattern","4324243");
        return List.of(p1,p2,p3);
    }
}
