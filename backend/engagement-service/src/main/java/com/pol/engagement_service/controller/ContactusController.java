package com.pol.engagement_service.controller;

import com.pol.engagement_service.dto.ResponseDTO;
import com.pol.engagement_service.dto.contact.ContactusRequestDTO;
import com.pol.engagement_service.dto.contact.ContactusResponseDTO;
import com.pol.engagement_service.service.ContactusService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contactus")
public class ContactusController {

    private final ContactusService contactusService;

    public ContactusController(ContactusService contactusService) {
        this.contactusService = contactusService;
    }

    @PostMapping
    public ResponseEntity<ResponseDTO<Void>> createContactUs(@Valid @RequestBody ContactusRequestDTO contactusRequestDTO){
        contactusService.createContactUs(contactusRequestDTO);
        return ResponseEntity.ok(ResponseDTO.<Void>builder()
                        .success(true)
                        .data(null)
                        .message("You have successfully submitted the message")
                .build());
    }
}
