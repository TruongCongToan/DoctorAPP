package com.example.demo.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.model.UserModel;

@Service
public interface IUserService {
	//lay thong tin nguoi dung
		public List<Users> getAllUsers() throws SQLException, IOException;
		//tim theo ten
		public Users getUserByName(String inname) throws SQLException;
		//xoa user
		public void deleteUser(String inname) throws SQLException;
		//them moi user
		public void addUser(UserModel userModel) throws SQLException;
		//update user
		public void editUser(UserModel userModel, String inname) throws SQLException;
}
