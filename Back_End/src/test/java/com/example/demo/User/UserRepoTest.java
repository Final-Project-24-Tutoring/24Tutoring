package com.example.demo.User;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
class UserRepoTest {

    private final UserRepo userRepo;

    @Autowired
    public UserRepoTest(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Test
    void itShouldFindUserByUsername() {
        User user = new User("shahad","123","teacher");
        userRepo.save(user);
        User result = userRepo.findByUsername("shahad");
        assertEquals("shahad", result.getUsername());
    }
}