package com.example.demo.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DAO.IUserDAO;
import com.example.demo.DTO.ProductRepository;
import com.example.demo.entity.Users;
import com.example.demo.exception.DuplicateRecordException;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.UserModel;
import com.example.demo.service.IUserService;

import java.util.Base64;

import org.springframework.util.StringUtils;

@Service
public class UserService implements IUserService {
	@Autowired
	private IUserDAO userDAO;
	@Autowired
	private ProductRepository productRepo;
	
	//lay danh sach user
	@Override
	public List<Users> getAllUsers() throws SQLException {
		return productRepo.findAll();
	}
//them user
	@Override
	public void addUser(UserModel userModel) throws SQLException {
		if (userDAO.findByName(userModel.getUsername()) == null) {
			
			Users user = new Users();
			String fileName = StringUtils.cleanPath(userModel.getImage().getOriginalFilename());
			
			user.setUsername(userModel.getUsername());;
			user.setEmail(userModel.getEmail());
			user.setPassword(userModel.getPassword());
			user.setAddress(userModel.getAddress());
			user.setPhonenumber(userModel.getPhonenumber());
			user.setGender(userModel.getGender());
			user.setRole(userModel.getRole());
			
			if (fileName.contains("..")) {
				System.out.println("not a valid file ");
			}
			user.setImage(Base64.getEncoder().encodeToString(fileName.getBytes()));
			user.setPosition(userModel.getPosition());
			user.setCreateat(userModel.getCreateat());
			user.setUpdateat(userModel.getUpdateat());
			
//			return userDAO.save(user);
			productRepo.save(user);
		}
		else {
			 throw new DuplicateRecordException("Da co user nay trong danh sach");
		}
	}
	// get user by username
	@Override
	public Users getUserByName(String inname) throws SQLException {
		if (inname != null) {
			Users user = userDAO.findByName(inname);
			if (user != null) {
				return user;
			}else {
				   throw new NotFoundException("Khong tim thay nguoi dung nay");
			}
		} else {
			throw new NotFoundException("Khong tim thay nguoi dung nay");
		}
	}
 //xoa nguoi dung khoi danh sach
	@Override
	public void deleteUser(String inname) throws SQLException {
		if (userDAO.findByName(inname) != null) {
			userDAO.deleteUser(inname);
		}
		else {
			throw new NotFoundException("Khong tim thay nguoi dung nay");
		}		
	}
 //update user
	@Override
	public void editUser(UserModel userModel, String inname) throws SQLException {
		if (userDAO.findByName(inname) != null) {
			Users user = userDAO.findByName(inname);
	
		
			
// 			if (!user.getUsername().equals(userModel.getUsername())) {
// 				user.setUsername(userModel.getUsername());
// 			}
 			if (!user.getEmail().equals(userModel.getEmail()) ) {
 				user.setEmail(userModel.getEmail());	
 			}
 			if (!user.getPassword().equals(userModel.getPassword()) ) {
 				user.setPassword(userModel.getPassword());
 			}
 			if (!user.getAddress().equals(userModel.getAddress())) {
 				user.setAddress(userModel.getAddress());
 			}
 			if(!user.getPhonenumber().equals(userModel.getPhonenumber())) {
 				user.setPhonenumber(userModel.getPhonenumber());
 			}
 			if (!user.getGender().equals(userModel.getGender()) ) {
 				user.setGender(userModel.getGender());
 			}
 			if(!user.getRole().equals(userModel.getRole())) {
 				user.setRole(userModel.getRole());
 			}
// 			if(!user.getImage().equals(userModel.getImage())) {
// 				user.setImage(userModel.getImage());		
// 			}
 			if (!user.getPosition().equals(userModel.getPosition()) ) {
 				user.setPosition(userModel.getPosition());
 			}
// 			if (!user.getCreateat().equals(userModel.getCreateat())) {
// 				user.setCreateat(userModel.getCreateat());
// 			}
//			if (!user.getUpdateat().equals(userModel.getUpdateat()) ) {
//				user.setUpdateat(userModel.getUpdateat());
//			}
 			String fileName = StringUtils.cleanPath(userModel.getImage().getOriginalFilename());

			if (fileName.contains("..")) {
				System.out.println("not a valid file ");
			}
			user.setImage(Base64.getEncoder().encodeToString(fileName.getBytes()));
 			user.setCreateat(userModel.getCreateat());
 			user.setUpdateat(userModel.getUpdateat());
 			
 			
 			userDAO.saveAndFlush(user);
 			System.out.println(user);
		}else {
			throw new NotFoundException("Khong tim thay nguoi dung nay");
		}
		
	}
	
	

}
