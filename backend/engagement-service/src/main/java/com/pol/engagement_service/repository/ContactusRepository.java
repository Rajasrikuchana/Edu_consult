package com.pol.engagement_service.repository;

import com.pol.engagement_service.entity.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ContactusRepository extends JpaRepository<ContactUs, UUID> {
}
