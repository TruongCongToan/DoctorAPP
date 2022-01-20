package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Data;
@Entity
@Table(name = "markdown")
@Data
public class MarkDown implements Serializable {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
		@Lob
	  @Column(name = "contentHTML")
	private String contentHTML;
		@Lob
	  @Column(name = "contentMarkDown")
	private String contentMarkDown;
	  @Column(name = "description")
	  @Lob
	private String description;
//	  @Column(name = "doctorID")
//	 private int doctorID;
	  @Column(name = "specialtyID")
		 private int specialtyID;
	  @Column(name = "clinicID")
		 private int clinicID;
	  
	  @OneToOne
	    @JoinColumn(name = "doctorID", referencedColumnName = "user_id") //để tường minh hơn thì nên khai báo thêm referencedColumnName
	    private Users user;
	  
	  

}