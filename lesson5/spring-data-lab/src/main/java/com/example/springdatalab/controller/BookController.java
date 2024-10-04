package com.example.springdatalab.controller;

import com.example.springdatalab.model.Book;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @PostMapping
    public Book createBookV1(@RequestBody Book book) {
        return book;
    }


    /*
        Get a book by book id
     */
    @GetMapping(value = "/{id}")
    public ResponseEntity<Book> getBookByIdV1(@PathVariable int id ) {
        return null;
    }

    /*
        Get a list of books
     */
    @GetMapping
    public List<Book> getAllBooksV1() {
      return null;
    }


    /*
        Update book by id

     */
    @PutMapping(value = "/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book book) {
        return null;
    }



    //Delete a book by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable int id) {
        return null;
    }
}
