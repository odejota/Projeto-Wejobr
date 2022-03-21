package com.wejobr.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.wejobr.app.entities.Recrutador;
import com.wejobr.app.repositories.RecrutadorRepository;

@Service
public class RecrutadorService {
	
	@Autowired	
	private RecrutadorRepository repository;
	
	@Transactional(readOnly = true)
	public List<Recrutador> select() {
		return repository.findAll();
	}
	
	@Transactional(readOnly = true)
	public Optional<Recrutador> selectById(Long IdRecrutador) {
		return repository.findById(IdRecrutador);
	}
	
	@Transactional(readOnly = true)
	public void save(Recrutador recrutador) {
		repository.save(recrutador);
	}

	@Transactional(readOnly = false)
	public void delete(Long IdRecrutador) {
		repository.deleteById(IdRecrutador);
	}
	
	@Transactional(readOnly = false)
	public Recrutador update(Recrutador recrutador) {
		return repository.save(recrutador);
	}


}
