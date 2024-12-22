package com.pol.engagement_service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class ResponseDTO<T> {
    
    private boolean success; // Indicates if the request was successful
    
    private String message; // A message describing the result (e.g., "Operation successful")
    
    private T data; // The payload (e.g., a DTO, list of DTOs, or null)
}
