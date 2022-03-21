package com.wejobr.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wejobr.app.entities.Candidato;
import com.wejobr.app.repositories.CandidatoRepository;

@Service
public class CandidatoService {
	
	@Autowired	
	private CandidatoRepository repository;
	
	@Transactional(readOnly = true)
	public List<Candidato> select() {
		return repository.findAll();
	}
	
	@Transactional(readOnly = true)
	public Optional<Candidato> selectById(Long IdCandidato) {
		return repository.findById(IdCandidato);
	}
	
	@Transactional(readOnly = true)
	public void save(Candidato candidato) {
		repository.save(candidato);
	}

	@Transactional(readOnly = false)
	public void delete(Long IdCandidato) {
		repository.deleteById(IdCandidato);
	}
	
	@Transactional(readOnly = false)
	public Candidato update(Candidato candidato) {
		return repository.save(candidato);
	}

}
