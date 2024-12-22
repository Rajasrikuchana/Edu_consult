package com.pol.engagement_service.controller;

import com.pol.engagement_service.dto.ResponseDTO;
import com.pol.engagement_service.dto.feedback.FeedbackRequestDTO;
import com.pol.engagement_service.service.FeedbackService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping
    public ResponseEntity<ResponseDTO<Void>> createFeedback(@Valid @RequestBody FeedbackRequestDTO feedbackRequestDTO){
        feedbackService.createFeedback(feedbackRequestDTO);
        ResponseDTO<Void> responseDTO = ResponseDTO.<Void>builder()
                .success(true)
                .message("Feedback successfully sent")
                .data(null)
                .build();
        return ResponseEntity.ok(responseDTO);
    }
}
