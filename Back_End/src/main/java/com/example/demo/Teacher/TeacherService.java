package com.example.demo.Teacher;

import com.example.demo.Student.Student;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static java.lang.Long.parseLong;

@Service
public class TeacherService /*implements UserDetailsService*/ {
    private final TeacherRepo teacherRepo;

    @Autowired
    public TeacherService(TeacherRepo teacherRepo) {
        this.teacherRepo = teacherRepo;
    }

    public List<Teacher> getTeachers(){
        return teacherRepo.findAll();
    }
//
    public Teacher getTeacher(String id){
        return teacherRepo.findById(id);
    }

    public Teacher createTeacher(Teacher teacher){
        return teacherRepo.save(teacher);
    }

    public void updateTeacher(String id){
        long longId = parseLong(id);
        Teacher teacher = teacherRepo.findById(longId).orElse(null);
        teacherRepo.save(teacher);
    }
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Teacher teacher= teacherRepo.findByUsername(username);
//        if(teacher == null){
//            System.out.println("student does not exist");
//            throw new UsernameNotFoundException("student does not exist");
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(teacher.getRole()));
//
//        return new org.springframework.security.core.userdetails.User(teacher.getUsername(),teacher.getPassword(),authorities);
//    }
}
