package com.wejobr.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wejobr.app.entities.Recrutador;

@Repository
public interface RecrutadorRepository extends JpaRepository<Recrutador, Long>{

}
