package com.example.demo.Teacher;

import com.example.demo.Student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="teachers")
public class TeacherController {

    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public List<Teacher> getTeachers(){
        return teacherService.getTeachers();
    }

    @GetMapping("/{id}")
    public Teacher getTeacher(@PathVariable String id){
        return teacherService.getTeacher(id);
    }

    @PostMapping
    public Teacher createTeacher(@RequestBody Teacher teacher){

        return teacherService.createTeacher(teacher);
    }

    @PutMapping("/{id}")
    public void updateTeacher(@PathVariable String id){
        teacherService.updateTeacher(id);
    }
}
