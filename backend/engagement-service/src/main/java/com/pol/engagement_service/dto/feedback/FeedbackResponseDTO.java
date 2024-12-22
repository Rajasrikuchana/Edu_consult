package com.pol.engagement_service.dto.feedback;

import lombok.Data;

import java.util.UUID;

@Data
public class FeedbackResponseDTO {
    private UUID id;
    private String name;
    private String email;
    private String feedback;
}
