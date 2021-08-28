package com.monovexstudio.monovex.dto.response;

import com.monovexstudio.monovex.entity.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostResponse {
    private Long id;

    private String title;
    private String description;
    private String fullText;
    private String image;

    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.description = post.getDescription();
        this.fullText = post.getFullText();
        this.image = post.getImage();
    }
}
