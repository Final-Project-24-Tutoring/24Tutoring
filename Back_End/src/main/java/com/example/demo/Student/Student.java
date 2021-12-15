package com.example.demo.Student;

import com.example.demo.Grade.Grade;
import com.example.demo.Offer.Offer;
import com.example.demo.Rating.Rating;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fName;
    private String lName;
    @Column(unique=true)
    private String username;
    @Column(unique=true)
    private String email;
    private String password;
    private Long phone;
    @ManyToOne (fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name ="grade_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Grade grade;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Offer> offers = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Rating> ratings = new ArrayList<>();

    public Student() {
    }

    public Student(Long id, String fName, String lName, String username, String email, String password, Long phone, Grade grade, List<Offer> offers, List<Rating> ratings) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.grade = grade;
        this.offers = offers;
        this.ratings = ratings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public List<Offer> getOffers() {
        return offers;
    }

    public void setOffers(List<Offer> offers) {
        this.offers = offers;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }
}
