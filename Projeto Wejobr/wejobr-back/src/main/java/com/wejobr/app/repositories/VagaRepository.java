package com.wejobr.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wejobr.app.entities.Vaga;

@Repository
public interface VagaRepository extends JpaRepository <Vaga, Long>{

}
