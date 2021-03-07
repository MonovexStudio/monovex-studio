package com.monovexstudio.monovex.controller;

import com.monovexstudio.monovex.dto.request.CommentRequest;
import com.monovexstudio.monovex.dto.response.CommentResponse;
import com.monovexstudio.monovex.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @PostMapping("/addComment")
    public final void create(@Valid @RequestBody final CommentRequest request) {
        commentService.create(request);
    }
    @GetMapping("/getComment")
    public List<CommentResponse> findAll(){
        return commentService.findAll();
    }
    @DeleteMapping
    public void delete(Long id) { commentService.delete(id); }
}
