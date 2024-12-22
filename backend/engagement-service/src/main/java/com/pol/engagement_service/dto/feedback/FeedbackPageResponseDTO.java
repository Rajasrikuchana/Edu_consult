package com.pol.engagement_service.dto.feedback;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FeedbackPageResponseDTO {
    private boolean success;
    private List<FeedbackResponseDTO> data;
    private long totalElements;
    private int totalPages;
    private int currentPage;
    private int pageSize;
    private boolean hasNext;
    private boolean hasPrevious;
}
