package com.monovexstudio.monovex.controller;

import com.monovexstudio.monovex.dto.request.CustomerRequest;
import com.monovexstudio.monovex.service.CustomerService;
import com.monovexstudio.monovex.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/createAndSend")
    public final void create(@Valid @RequestBody final CustomerRequest request) {
        customerService.create(request);
    }
}
