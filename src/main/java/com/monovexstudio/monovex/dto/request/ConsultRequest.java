package com.monovexstudio.monovex.dto.request;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ConsultRequest {
    @NotNull
    private String credentials;
    private String email;
    @NotNull
    private String phoneNumber;
}
