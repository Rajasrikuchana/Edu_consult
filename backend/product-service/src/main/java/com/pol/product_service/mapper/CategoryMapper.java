package com.pol.product_service.mapper;

import com.pol.product_service.DTO.category.CategoryRequestDTO;
import com.pol.product_service.DTO.category.CategoryResponseDTO;
import com.pol.product_service.entity.Category;

public class CategoryMapper {

    public static Category toEntity(CategoryRequestDTO dto) {
        return Category.builder()
                .name(dto.getName())
                .summary(dto.getSummary())
                .slug(generateSlug(dto.getName())) // ✅ Generate slug safely
                .build();
    }

    public static CategoryResponseDTO toResponseDTO(Category category) {
        return CategoryResponseDTO.builder()
                .id(category.getId())
                .name(category.getName())
                .slug(category.getSlug())
                .summary(category.getSummary())
                .build();
    }

    private static String generateSlug(String name) {
        return name.trim().toLowerCase() // ✅ Java 8 compatible
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");
    }
}
