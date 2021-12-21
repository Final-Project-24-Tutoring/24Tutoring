package com.example.demo.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class StudentService {

    private final StudentRepo studentRepo;

    @Autowired
    public StudentService(StudentRepo studentRepo ) {
        this.studentRepo = studentRepo;
    }

    public List<Student> getStudents(){
        return studentRepo.findAll();
    }

    public int getStudentGradeId(String id){
        return studentRepo.findGradeIdByUsername(id);
    }

    public Student getStudentById(String id){
        return studentRepo.findById(id);
    }

    public Student getStudentByUserId(String userId){
        return studentRepo.findByUserId(userId);
    }

    public Student createStudent(Student student){

        return studentRepo.save(student);
    }

    public void updateStudent(String id){
        long longId = parseLong(id);
        Student student = studentRepo.findById(longId).orElse(null);
        studentRepo.save(student);
    }




}
