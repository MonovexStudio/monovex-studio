package com.monovexstudio.monovex.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentRequest {
    private String firstName;
    private String secondName;
    private String text;
}
