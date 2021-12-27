package com.example.demo.Teacher;

import com.example.demo.Offer.Offer;
import com.example.demo.Rating.Rating;
import com.example.demo.TeacherGradeSubjectLink.TeacherGradeSubjectLink;
import com.example.demo.User.User;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teachers")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fName;
    private String lName;
    @Column(unique=true)
    private String email;
    private Long phone;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<Offer> offers = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<Rating> ratings = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher")
    private List<TeacherGradeSubjectLink> teacherGradeSubjectLinks = new ArrayList<>();
    @OneToOne (fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name ="user_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;


    public Teacher() {
    }

    public Teacher(Long id, String fName, String lName, String email, Long phone, List<Offer> offers, List<Rating> ratings) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.phone = phone;
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

    public String getEmail() {
        return email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
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
