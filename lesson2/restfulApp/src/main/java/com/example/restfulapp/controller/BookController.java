package com.example.restfulapp.controller;

import com.example.restfulapp.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@RequestMapping("/books")
@RestController
public class BookController {

    /*
        Create a new book with Media type versioning
    */
    @PostMapping(value = "/books",produces = "application/v1+json")
    public Book createBookV1(@RequestBody Book book) {
        return book;
    }

    @PostMapping(value = "/books",produces = "application/v2+json")
    public Book createBookV2(@RequestBody Book book) {
        //just create a new book and return in order to differentiate version 1 and 2
        return new Book(24,"Learning PHP","234234",400.99);
    }



    /*
        Get a book by book id using Custom Header Versioning
     */
    @GetMapping(value = "/books/{id}",headers = "X-API-VERSION=1")
    public ResponseEntity<Book> getBookByIdV1(@PathVariable int id ) {
        if ( id != 123){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Book book = new Book(123,"Learn React","23232",450.99);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @GetMapping(value = "/books/{id}",headers = "X-API-VERSION=2")
    public ResponseEntity<Book> getBookByIdV2(@PathVariable int id ) {
        if ( id != 123){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Book book = new Book(123,"Learn Java","2345",460.99);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }



    /*
        Get a list of books using URL Versioning
     */
    @GetMapping("/v1/books")
    public List<Book> getAllBooksV1() {
        List<Book> books = new ArrayList<>();
        books.add(new Book(1,"Learn React","23232",450.99));
        books.add(new Book(2,"Learn Spring Boot","232323",490.99));
        books.add(new Book(1,"Learn Design Pattern","42343",234.99));
        return books;
    }

    @GetMapping("/v2/books")
    public List<Book> getAllBooksV2() {
        List<Book> books = new ArrayList<>();
        books.add(new Book(1,"Learn PHP","23232",450.99));
        books.add(new Book(2,"Learn Spring Boot","232323",490.99));
        books.add(new Book(1,"Learn React JS","42343",234.99));
        return books;
    }


    /*
        Update book by id
        Using Request Parameter Versioning
     */
    @PutMapping(value = "/books/{id}", params = "version=1")
    public ResponseEntity<Book> updateBookV1(@PathVariable int id, @RequestBody Book book) {
        if(id != 123) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        //Pseudo - update a book with the values that are passed using id
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PutMapping(value = "/books/{id}", params = "version=2")
    public ResponseEntity<Book> updateBookV2(@PathVariable int id, @RequestBody Book book) {
        if(id != 123) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        //Pseudo - update a book with the values that passed using id
        // Create new book and return in order to differentiate version
        return new ResponseEntity<>(new Book(4,"Learn Big Data","3223",345.99), HttpStatus.OK);
    }



    //Delete a book by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable int id) {
        if ( id != 123){
            return new ResponseEntity<>("Book not found",HttpStatus.NOT_FOUND);
        }
        //pseudo - delete book from database by using id
        return ResponseEntity.status(HttpStatus.OK).body("Book deleted successfully");
    }
}
