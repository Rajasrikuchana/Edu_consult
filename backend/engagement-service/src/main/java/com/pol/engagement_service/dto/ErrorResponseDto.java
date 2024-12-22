package com.pol.engagement_service.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ErrorResponseDto {
    private String errorCode;
    private String message;
    private LocalDateTime timestamp;
    private String details;
    private String resolveHint;
}