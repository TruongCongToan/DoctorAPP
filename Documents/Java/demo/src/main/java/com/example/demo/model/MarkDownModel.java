package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarkDownModel {
	private int id;
	private String contentHTML;
	private String contentMarkDown;
	private int doctorID;
	private int specialtyID;
	private int clinicID;
	private String description;
}
