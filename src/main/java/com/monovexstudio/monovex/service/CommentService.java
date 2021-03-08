package com.monovexstudio.monovex.service;

import com.monovexstudio.monovex.dto.request.CommentRequest;
import com.monovexstudio.monovex.dto.response.CommentResponse;
import com.monovexstudio.monovex.entity.Comment;
import com.monovexstudio.monovex.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;

    public void create(CommentRequest request){
        commentRepository.save(commentRequestToComment(null,request));
    }

    private Comment commentRequestToComment(Comment comment, CommentRequest request){
        if (comment == null){
            comment = new Comment();
        }
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDateTime currentDate = LocalDateTime.now();
        comment.setFirstName(request.getFirstName());
        comment.setSecondName(request.getSecondName());
        comment.setText(request.getText());
        comment.setDate(dtf.format(currentDate));
        return comment;
    }
    public Comment findById(Long id){
        return commentRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Comment with id:"+id+"is not exists"));
    }
    public void delete(Long id){
        commentRepository.delete(findById(id));
    }
    public List<CommentResponse> findAll(){
        return commentRepository.findAll().stream().map(CommentResponse::new).collect(Collectors.toList());
    }
}
