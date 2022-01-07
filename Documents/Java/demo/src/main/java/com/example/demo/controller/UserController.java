package com.example.demo.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.model.UserModel;
import com.example.demo.service.impl.UserService;

@RestController 
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService service;
	
//	// get all user
//		@GetMapping("/api/users")
//		@CrossOrigin(origins = "http://localhost:3000")
//		public ResponseEntity<Object> getAllUsers() {
//			HttpStatus httpStatus = null;
//			List<UserModel> userModels = new ArrayList<UserModel>();
//			try {
//				userModels = service.getListUser();
//				httpStatus = HttpStatus.OK;
//			} catch (Exception e) {
//				httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
//				System.out.println(e);
//			}
//			return new ResponseEntity<Object>(userModels, httpStatus);
//		}
//		
//	//tim user theo username
//		@GetMapping("/api/users/{username}")
//		@CrossOrigin(origins = "http://localhost:3000")
//		public ResponseEntity<Object> getListUsersByName(@PathVariable("username") String username) {
//			HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
//			Users user = new Users();
//			try {
//				user = service.getUserByName(username);
//				httpStatus = HttpStatus.OK;
//			} catch (Exception e) {
//				e.getStackTrace();
//			}
//			return new ResponseEntity<Object>(user, httpStatus);
//		}
//	
	// them user
		@PostMapping("/api/users")
		@CrossOrigin(origins = "http://localhost:3000")
		public ResponseEntity<Object> addUsers(@Valid @RequestBody UserModel userModel1) {
			HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
			try {
				service.addUser(userModel1);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		
			return new ResponseEntity<Object>(userModel1,httpStatus);
		}
		
	//sua thong tin nguoi dung

		@PutMapping("api/users/{username}")
		@CrossOrigin(origins = "http://localhost:3000")
		public ResponseEntity<Object> editUser(@Valid @RequestBody UserModel userModel,
			@PathVariable("username") String username) {
			HttpStatus httpStatus = null;
			try {
				service.editUser(userModel, username);
				httpStatus = HttpStatus.OK;

			} catch (Exception e) {
				httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
			}
			return new ResponseEntity<Object>(httpStatus);
		}
	//xoa nguoi dung
		@CrossOrigin(origins = "http://localhost:3000")
		@DeleteMapping("api/users/{username}")

		public ResponseEntity<Object> delUser(@PathVariable("username") String username) {
			HttpStatus httpStatus = HttpStatus.FORBIDDEN;
			try {
				service.deleteUser(username);
				httpStatus = HttpStatus.ACCEPTED;
			} catch (Exception e) {
				e.getStackTrace();
			}
			return new ResponseEntity<Object>(httpStatus);
		}
		
		
}
