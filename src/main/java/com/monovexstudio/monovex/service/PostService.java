package com.monovexstudio.monovex.service;

import com.monovexstudio.monovex.dto.request.PostRequest;
import com.monovexstudio.monovex.dto.response.PostResponse;
import com.monovexstudio.monovex.entity.Post;
import com.monovexstudio.monovex.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
@Autowired
   private PostRepository postRepository;

    public void create(PostRequest request){
        postRepository.save(postRequestToPost(null,request));
    }
    private Post postRequestToPost(Post post, PostRequest request) {
        if (post == null){
            post = new Post();
        }
        post.setTitle(request.getTitle());
        post.setDescription(request.getDescription());
        post.setFullText(request.getFullText());
        postRepository.save(post);
        return post;
    }
    private Post findById(Long id){
        return postRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Post with id:"+id+"is not exists"));
    }
    public void update(Long id,PostRequest request){
        postRepository.save(postRequestToPost(findById(id),request));
    }
    public void delete(Long id){
        postRepository.delete(findById(id));
    }
    public List<PostResponse> findAll(){
        System.out.println(postRepository.findAll().stream().map(PostResponse::new).collect(Collectors.toList()));
        return postRepository.findAll().stream().map(PostResponse::new).collect(Collectors.toList());
    }
}
