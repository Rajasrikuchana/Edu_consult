package com.pol.engagement_service.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank(message = "your name is required")
    @Size(max = 100, message = "your name can not longer than 100 letters.")
    @Column(nullable = false)
    private String name;

    @Email(message = "Email address is not valid.")
    @NotBlank(message = "Email is required")
    @Column(nullable = false)
    private String email;

    @Column(columnDefinition = "MEDIUMTEXT",nullable = false)
    private String feedback;
}
