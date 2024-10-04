package com.example.springdatalab.controller;

import com.example.springdatalab.model.Book;
import com.example.springdatalab.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        Book newbook = bookRepository.save(book);
        return ResponseEntity.ok(newbook);
    }


    /*
        Get a book by book id
     */
    @GetMapping(value = "/{id}")
    public ResponseEntity<Book> getBookByIdV1(@PathVariable long id ) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        if(bookOptional.isPresent()) {
            Book book = bookOptional.get();
            return ResponseEntity.ok(book);
        }
        return ResponseEntity.notFound().build();
    }

    /*
        Get a list of books
     */
    @GetMapping
    public List<Book> getAllBooks() {
      Iterable<Book> books = bookRepository.findAll();
      List<Book> bookList = new ArrayList<>();
      books.forEach(b -> bookList.add(b));
      return bookList;
    }

    /*
        Update book by id

     */
    @PutMapping(value = "/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable long id, @RequestBody Book book) {
        //find book
        Optional<Book> bookOptional = bookRepository.findById(id);
        if(bookOptional.isPresent()) {
            Book existingBook = bookOptional.get();
            existingBook.setTitle(book.getTitle());
            existingBook.setIsbn(book.getIsbn());
            existingBook.setPrice(book.getPrice());
            bookRepository.save(existingBook);
            return ResponseEntity.ok(existingBook);
        }else{
            return ResponseEntity.notFound().build();
        }
    }



    //Delete a book by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable long id) {
        Optional<Book> bookOptional = bookRepository.findById(id);
        if(bookOptional.isPresent()) {
            bookRepository.deleteById(id);
            return ResponseEntity.status(200).body("Book deleted successfully");
        }else{
            return ResponseEntity.status(404).body("Book not found");
        }
    }
}
