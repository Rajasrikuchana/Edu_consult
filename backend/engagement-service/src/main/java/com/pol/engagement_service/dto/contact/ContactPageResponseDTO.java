package com.pol.engagement_service.dto.contact;

import com.pol.engagement_service.dto.feedback.FeedbackResponseDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ContactPageResponseDTO {
    private boolean success;
    private List<ContactusResponseDTO> data;
    private long totalElements;
    private int totalPages;
    private int currentPage;
    private int pageSize;
    private boolean hasNext;
    private boolean hasPrevious;
}
