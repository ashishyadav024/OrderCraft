package com.ordercraft.backend.controller;

import com.ordercraft.backend.entity.Customer;
import com.ordercraft.backend.service.CustomerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// The REST API layer: Angular (or Postman) talks to these URLs
@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:4200")   // allow the Angular app during development
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @GetMapping                       // GET /api/customers
    public List<Customer> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")              // GET /api/customers/1
    public Customer getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping                      // POST /api/customers
    @ResponseStatus(HttpStatus.CREATED)
    public Customer create(@Valid @RequestBody Customer customer) {
        return service.create(customer);
    }

    @PutMapping("/{id}")              // PUT /api/customers/1
    public Customer update(@PathVariable Long id, @Valid @RequestBody Customer customer) {
        return service.update(id, customer);
    }

    @DeleteMapping("/{id}")           // DELETE /api/customers/1
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}