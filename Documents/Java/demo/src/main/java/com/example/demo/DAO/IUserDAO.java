package com.example.demo.DAO;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Users;

@Repository
@Transactional
public interface IUserDAO extends JpaRepository<Users, Integer> {
	// get all users
	@Query(nativeQuery = true, value = "select * from users order by username")
	public List<Users> getAllUsers();

	// get thong tin sv by masv
	@Query(value = "select * from users where username = :inname", nativeQuery = true)
	public Users findByName(@Param("inname") String inname);

	// xoa sinh vien theo masv
	@Modifying
	@Query(value = "delete from users where username =:inname", nativeQuery = true)
	public void deleteUser(@Param("inname") String inname);
	

}
