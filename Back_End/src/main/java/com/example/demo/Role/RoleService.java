package com.example.demo.Role;

import com.example.demo.Grade.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    private final RoleRepo roleRepo;

    @Autowired
    public RoleService(RoleRepo roleRepo) {
        this.roleRepo = roleRepo;
    }

    public List<Role> getRoles(){
        return roleRepo.findAll();
    }

    public Role createRole(Role role){
        return roleRepo.save(role);
    }
}
