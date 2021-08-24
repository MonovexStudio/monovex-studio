package com.monovexstudio.monovex.repository;

import com.monovexstudio.monovex.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
