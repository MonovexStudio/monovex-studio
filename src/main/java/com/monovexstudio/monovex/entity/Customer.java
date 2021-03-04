package com.monovexstudio.monovex.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

}
