package com.pol.engagement_service.dto.feedback;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class FeedbackRequestDTO {
    @NotBlank(message = "Last name is required")
    @Size(max = 30, message = "Last name can not longer than 30 letters.")
    private String name;

    @Email(message = "Email address is not valid.")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Feedback is required")
    private String feedback;
}
