package com.ordercraft.backend.controller;

import com.ordercraft.backend.dto.BomItemRequest;
import com.ordercraft.backend.entity.BomItem;
import com.ordercraft.backend.service.BomService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products/{productId}/bom")
@CrossOrigin(origins = "http://localhost:4200")
public class BomController {

    private final BomService bomService;

    public BomController(BomService bomService) {
        this.bomService = bomService;
    }

    @GetMapping
    public ResponseEntity<List<BomItem>> getBom(@PathVariable Long productId) {
        return ResponseEntity.ok(bomService.getBomByProduct(productId));
    }

    @PostMapping
    public ResponseEntity<BomItem> addBomItem(@PathVariable Long productId,
                                              @Valid @RequestBody BomItemRequest request) {
        BomItem createdItem = bomService.addMaterialToBom(productId, request);
        return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
    }

    @PutMapping("/{bomItemId}")
    public ResponseEntity<BomItem> updateBomItem(@PathVariable Long productId,
                                                 @PathVariable Long bomItemId,
                                                 @Valid @RequestBody BomItemRequest request) {
        BomItem updated = bomService.updateBomItemQuantity(bomItemId, request.getQuantityRequired());
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{bomItemId}")
    public ResponseEntity<Void> deleteBomItem(@PathVariable Long productId,
                                              @PathVariable Long bomItemId) {
        bomService.removeMaterialFromBom(bomItemId);
        return ResponseEntity.noContent().build();
    }
}