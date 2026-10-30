package com.ordercraft.backend.controller;

import com.ordercraft.backend.entity.Material;
import com.ordercraft.backend.service.MaterialService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materials")
@CrossOrigin(origins = "http://localhost:4200")
public class MaterialController {

    private final MaterialService service;

    public MaterialController(MaterialService service) {
        this.service = service;
    }

    @GetMapping
    public List<Material> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Material getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Material create(@Valid @RequestBody Material material) {
        return service.create(material);
    }

    @PutMapping("/{id}")
    public Material update(@PathVariable Long id, @Valid @RequestBody Material material) {
        return service.update(id, material);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}