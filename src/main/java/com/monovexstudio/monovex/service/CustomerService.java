package com.monovexstudio.monovex.service;

import com.monovexstudio.monovex.dto.request.CustomerRequest;
import com.monovexstudio.monovex.entity.Customer;
import com.monovexstudio.monovex.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    EmailSenderService emailSenderService;

    public void create(CustomerRequest request){
        customerRepository.save(customerRequestToCustomer(null,request));
    }
    private Customer customerRequestToCustomer(Customer customer, CustomerRequest request){
        if (customer == null) {
            customer = new Customer();
        }
        customer.setCredentials(request.getCredentials());
        customer.setEmail(request.getEmail());
        customer.setServiceType(request.getServiceType());
        customer.setPhoneNumber(request.getPhoneNumber());
        customer.setCity(request.getCity());
        customer.setDeadline(request.getDeadline());
        customer.setPrice(request.getPrice());
        customer.setSiteType(request.getSiteType());
        customer.setSiteTheme(request.getSiteTheme());
        customer.setWorkExample(request.getWorkExample());
        try {
            emailSenderService.sendToMonovex(request);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return customer;
    }
}
