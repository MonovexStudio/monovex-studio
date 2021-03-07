package com.monovexstudio.monovex.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.monovexstudio.monovex.entity.Customer;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CustomerResponse {
    private Long id;
    private String credentials;
    private String email;
    private String phoneNumber;
    private String serviceType;
    private String siteType;
    private String price;
    private String workExample;
    private String siteTheme;
    private String deadline;
    private String city;

    public CustomerResponse(Customer customer) {
        this.id = customer.getId();
        this.credentials = customer.getCredentials();
        this.email = customer.getEmail();
        this.phoneNumber = customer.getPhoneNumber();
        this.serviceType = customer.getServiceType();
        this.siteType = customer.getSiteType();
        this.price = customer.getPrice();
        this.workExample = customer.getWorkExample();
        this.siteTheme = customer.getSiteTheme();
        this.deadline = customer.getDeadline();
        this.city = customer.getCity();
    }
}
