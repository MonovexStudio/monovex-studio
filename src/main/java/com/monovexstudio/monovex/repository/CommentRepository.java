package com.monovexstudio.monovex.repository;

import com.monovexstudio.monovex.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
