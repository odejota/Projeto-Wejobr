package com.wejobr.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wejobr.app.entities.Vaga;
import com.wejobr.app.repositories.VagaRepository;

@Service
public class VagaService {
	
	@Autowired
	private VagaRepository repository;
	
	@Transactional(readOnly = true)
	public List<Vaga> select() {
		return repository.findAll();
	}
	
	
	@Transactional(readOnly = true)
	public Optional<Vaga> selectById(Long CodVaga) {
		return repository.findById(CodVaga);
	}
	
	@Transactional(readOnly = false)
	public void save(Vaga vaga) {
		repository.save(vaga);
	}


	@Transactional(readOnly = false)
	public void delete(Long CodVaga) {
		repository.deleteById(CodVaga);
	}
	
	@Transactional(readOnly = false)
	public Vaga update(Vaga vaga) {
		return repository.save(vaga);
	}
	
//	@Transactional(readOnly = true)
//	public List<Vaga> selectByDestaque(Sort VagaDestaque) {
//		return repository.findAll(VagaDestaque);
//	}

}
