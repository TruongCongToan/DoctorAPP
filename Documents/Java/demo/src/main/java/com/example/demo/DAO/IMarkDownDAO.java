package com.example.demo.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.MarkDown;

public interface IMarkDownDAO extends JpaRepository<MarkDown,Integer> {
	// get all users
		@Query(nativeQuery = true, value = "select * from markdown")
		public List<MarkDown> getAllMarkDown();
		
		// get thong tin sv by masv
		@Query(value = "select * from markdown where doctorID = :doctorID", nativeQuery = true)
		public MarkDown findByDoctorID(@Param("doctorID") int doctorID);
}
