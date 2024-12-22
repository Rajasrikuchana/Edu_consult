package com.pol.blog_service.dto.tags;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class TagResponseDTO {
    private UUID id;
    private String tagName;
}
