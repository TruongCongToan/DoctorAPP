package com.example.demo.DTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.Users;

@Repository
public interface ProductRepository extends JpaRepository<Users,Integer> {

}
