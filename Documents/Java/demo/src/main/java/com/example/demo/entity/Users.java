package com.example.demo.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

import lombok.Data;
@Entity
@Table(name = "users")
@Data
public class Users implements Serializable {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	  @Column(name = "username")
	private String username;
	  @Column(name = "email")
	private String email;
	  @Column(name = "password")
	private String password;
	  @Column(name = "address")
	 private String address;
	  @Column(name = "phonenumber")
	private String phonenumber;
	  @Column(name = "gender")
	private String gender;
	  @Column(name = "role")
	 private String role;
	  @Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image;

	  @Column(name = "position")
	private String position;
	  
	  @JsonFormat(pattern = "yyyy-MM-dd",shape = Shape.STRING)
	  @Column(name = "createat")
	private Date createat;
	  
	  @JsonFormat(pattern = "yyyy-MM-dd",shape = Shape.STRING)
	  @Column(name = "updateat")
	private Date updateat;
	  

}
