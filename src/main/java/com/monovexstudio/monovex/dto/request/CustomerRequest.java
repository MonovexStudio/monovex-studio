package com.monovexstudio.monovex.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CustomerRequest {
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
    private String message;
}
