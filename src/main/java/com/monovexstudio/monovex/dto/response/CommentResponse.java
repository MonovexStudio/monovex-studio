package com.monovexstudio.monovex.dto.response;

import com.monovexstudio.monovex.entity.Comment;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentResponse {
    private Long id;
    private String firstName;
    private String secondName;
    private String text;
    private String date;

    public CommentResponse(Comment comment) {
        this.id = comment.getId();
        this.firstName = comment.getFirstName();
        this.secondName = comment.getSecondName();
        this.text = comment.getText();
        this.date = comment.getDate();
    }

}
