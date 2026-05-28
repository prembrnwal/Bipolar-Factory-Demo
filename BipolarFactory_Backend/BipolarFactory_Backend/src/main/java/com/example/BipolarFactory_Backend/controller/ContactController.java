package com.example.BipolarFactory_Backend.controller;

import com.example.BipolarFactory_Backend.entity.ContactSubmission;
import com.example.BipolarFactory_Backend.repository.ContactSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactSubmissionRepository contactSubmissionRepository;

    @PostMapping
    public ResponseEntity<ContactSubmission> createContactSubmission(@RequestBody ContactSubmission contactSubmission) {
        ContactSubmission savedSubmission = contactSubmissionRepository.save(contactSubmission);
        return ResponseEntity.ok(savedSubmission);
    }
}
