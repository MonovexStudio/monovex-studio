package com.monovexstudio.monovex.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostRequest {

    private String title;
    private String description;
    private String fullText;
    private String image;
}
