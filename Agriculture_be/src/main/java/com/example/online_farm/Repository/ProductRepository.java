package com.example.online_farm.Repository;

import com.example.online_farm.Entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAll();
    Page<Product> findByTitleContaining(String name, Pageable pageable);
    Page<Product> findByCategoryId(int categoryId, Pageable pageable);
    boolean existsByCategoryId(int categoryId);

   

}
