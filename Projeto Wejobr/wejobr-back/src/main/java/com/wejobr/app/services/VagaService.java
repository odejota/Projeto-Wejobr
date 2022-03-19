package com.wejobr.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wejobr.app.entities.Empresa;
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
	
	@Transactional(readOnly = true)
	public Vaga insert(Vaga vaga) {
		return repository.save(vaga);
	}

	@Transactional(readOnly = false)
	public void delete(Long CodVaga) {
		repository.deleteById(CodVaga);
	}
	
	@Transactional(readOnly = false)
	public void update(Vaga vaga) {
		repository.save(vaga);
	}

}
