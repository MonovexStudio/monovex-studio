package com.monovexstudio.monovex.repository;

import com.monovexstudio.monovex.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
