package com.example.BipolarFactory_Backend.repository;

import com.example.BipolarFactory_Backend.entity.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {
}
