package com.ordercraft.backend.service;

import com.ordercraft.backend.entity.Product;
import com.ordercraft.backend.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Product getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Product not found with id " + id));
    }

    public Product create(Product product) {
        product.setId(null);
        return repository.save(product);
    }

    public Product update(Long id, Product updated) {
        Product existing = getById(id);
        existing.setSku(updated.getSku());
        existing.setName(updated.getName());
        existing.setUnitPrice(updated.getUnitPrice());
        return repository.save(existing);
    }

    public void delete(Long id) {
        getById(id);
        repository.deleteById(id);
    }
}