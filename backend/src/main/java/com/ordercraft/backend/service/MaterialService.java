package com.ordercraft.backend.service;

import com.ordercraft.backend.entity.Material;
import com.ordercraft.backend.entity.Supplier;
import com.ordercraft.backend.repository.MaterialRepository;
import com.ordercraft.backend.repository.SupplierRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class MaterialService {

    private final MaterialRepository repository;
    private final SupplierRepository supplierRepository;

    public MaterialService(MaterialRepository repository, SupplierRepository supplierRepository) {
        this.repository = repository;
        this.supplierRepository = supplierRepository;
    }

    public List<Material> getAll() {
        return repository.findAll();
    }

    public Material getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Material not found with id " + id));
    }

    public Material create(Material material) {
        material.setId(null);
        material.setSupplier(resolveSupplier(material.getSupplier()));
        return repository.save(material);
    }

    public Material update(Long id, Material updated) {
        Material existing = getById(id);
        existing.setCode(updated.getCode());
        existing.setName(updated.getName());
        existing.setUnit(updated.getUnit());
        existing.setStockQty(updated.getStockQty());
        existing.setUnitCost(updated.getUnitCost());
        existing.setSupplier(resolveSupplier(updated.getSupplier()));
        return repository.save(existing);
    }

    public void delete(Long id) {
        getById(id);
        repository.deleteById(id);
    }

    // The client sends only {"supplier": {"id": 1}}. Here we load the real
    // supplier from the DB, and reject the request if that id does not exist.
    private Supplier resolveSupplier(Supplier supplier) {
        if (supplier == null || supplier.getId() == null) {
            return null;                       // supplier is optional
        }
        return supplierRepository.findById(supplier.getId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "Supplier not found with id " + supplier.getId()));
    }
}