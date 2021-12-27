package com.example.demo.Teacher;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Long> {
//    @Query(value ="select id from teachers where username =?1",nativeQuery = true)
    public Teacher findById(String id);
}
