package com.ordercraft.backend.service;

import com.ordercraft.backend.entity.Supplier;
import com.ordercraft.backend.repository.SupplierRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class SupplierService {

    private final SupplierRepository repository;

    public SupplierService(SupplierRepository repository) {
        this.repository = repository;
    }

    public List<Supplier> getAll() {
        return repository.findAll();
    }

    public Supplier getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Supplier not found with id " + id));
    }

    public Supplier create(Supplier supplier) {
        supplier.setId(null);
        return repository.save(supplier);
    }

    public Supplier update(Long id, Supplier updated) {
        Supplier existing = getById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setPhone(updated.getPhone());
        existing.setAddress(updated.getAddress());
        return repository.save(existing);
    }

    public void delete(Long id) {
        getById(id);
        repository.deleteById(id);
    }
}