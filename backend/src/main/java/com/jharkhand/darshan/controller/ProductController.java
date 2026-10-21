package com.jharkhand.darshan.controller;

import com.jharkhand.darshan.entity.Product;
import com.jharkhand.darshan.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@Tag(name = "Tribal Marketplace", description = "Endpoints for authentic GI-tagged and tribal artisan crafts of Jharkhand")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    @Operation(summary = "Get all marketplace products or filter by category")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.trim().isEmpty()) {
            return ResponseEntity.ok(productService.getByCategory(category));
        }
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get single product by ID")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
