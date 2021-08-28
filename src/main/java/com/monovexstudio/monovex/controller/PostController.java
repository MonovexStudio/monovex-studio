package com.monovexstudio.monovex.controller;

import com.monovexstudio.monovex.dto.request.CommentRequest;
import com.monovexstudio.monovex.dto.request.PostRequest;
import com.monovexstudio.monovex.dto.response.CommentResponse;
import com.monovexstudio.monovex.dto.response.PostResponse;
import com.monovexstudio.monovex.service.CommentService;
import com.monovexstudio.monovex.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostService postService;
    @PostMapping("/addPost")
    public final void create(@Valid @RequestBody final PostRequest request) {
        postService.create(request);
    }
    @GetMapping("/getAllPosts")
    public List<PostResponse> findAll(){
        return postService.findAll();
    }
    @PutMapping("/updatePost")
    public void update(Long id, @Valid @RequestBody PostRequest request) {
        postService.update(id, request);
    }
    @DeleteMapping("/deletePost")
    public void delete(Long id) { postService.delete(id); }
}
