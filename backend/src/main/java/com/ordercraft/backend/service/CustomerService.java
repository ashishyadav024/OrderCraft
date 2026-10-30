package com.ordercraft.backend.service;

import com.ordercraft.backend.entity.Customer;
import com.ordercraft.backend.repository.CustomerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

// Business logic lives here (later: BOM calculation, invoice totals, etc.)
@Service
public class CustomerService {

    private final CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public List<Customer> getAll() {
        return repository.findAll();
    }

    public Customer getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Customer not found with id " + id));
    }

    public Customer create(Customer customer) {
        customer.setId(null);                 // make sure it is treated as a NEW row
        return repository.save(customer);
    }

    public Customer update(Long id, Customer updated) {
        Customer existing = getById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setPhone(updated.getPhone());
        existing.setAddress(updated.getAddress());
        return repository.save(existing);
    }

    public void delete(Long id) {
        getById(id);                          // throws 404 if it does not exist
        repository.deleteById(id);
    }
}