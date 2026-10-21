package com.jharkhand.darshan.service;

import com.jharkhand.darshan.entity.Product;
import com.jharkhand.darshan.repository.ProductRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Cacheable(value = "products", key = "'all'")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Cacheable(value = "products", key = "#category")
    public List<Product> getByCategory(String category) {
        if ("all".equalsIgnoreCase(category)) {
            return productRepository.findAll();
        }
        return productRepository.findByCategoryIgnoreCase(category);
    }

    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }
}
