package com.example.demo.Student;

import com.example.demo.Subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
    @Query(value ="select grade_id from students where id =?1",nativeQuery = true)
    public int findGradeIdByUsername(String id);
    public Student findById(String id);
    @Query(value ="select * from students where user_id =?1",nativeQuery = true)
    public Student findByUserId(String userId);
}
