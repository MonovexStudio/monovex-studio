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

    public CustomerResponse(Long id, String credentials, String email, String phoneNumber,
                            String serviceType, String siteType, String price,
                            String workExample, String siteTheme, String deadline, String city) {
        this.id = id;
        this.credentials = credentials;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.serviceType = serviceType;
        this.siteType = siteType;
        this.price = price;
        this.workExample = workExample;
        this.siteTheme = siteTheme;
        this.deadline = deadline;
        this.city = city;
    }
}
