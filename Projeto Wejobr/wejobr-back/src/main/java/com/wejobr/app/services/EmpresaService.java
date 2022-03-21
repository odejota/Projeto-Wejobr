package com.wejobr.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wejobr.app.entities.Empresa;
import com.wejobr.app.repositories.EmpresaRepository;

@Service
public class EmpresaService {
	@Autowired	
	private EmpresaRepository repository;
	
	@Transactional(readOnly = true)
	public List<Empresa> select() {
		return repository.findAll();
	}
	
	@Transactional(readOnly = true)
	public Optional<Empresa> selectById(Long IdEmpresa) {
		return repository.findById(IdEmpresa);
	}
	
	@Transactional(readOnly = true)
	public void save(Empresa empresa) {
		repository.save(empresa);
	}

	@Transactional(readOnly = false)
	public void delete(Long IdEmpresa) {
		repository.deleteById(IdEmpresa);
	}
	
	@Transactional(readOnly = false)
	public Empresa update(Empresa empresa) {
		return repository.save(empresa);
	}

}
