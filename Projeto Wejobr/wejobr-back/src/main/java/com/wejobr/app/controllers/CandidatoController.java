package com.wejobr.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wejobr.app.entities.Candidato;
import com.wejobr.app.services.CandidatoService;

@RestController
@RequestMapping ("/candidatos")
@CrossOrigin(origins = "http://localhost:3000")
public class CandidatoController {
	
	@Autowired
	private CandidatoService service;
	
	@GetMapping("/admin/listarTodos")
	public List<Candidato> select() {
		return service.select();
	}
	
	@GetMapping("/admin/listarPorId/{IdCandidato}")
	public Candidato selectedById(@PathVariable Long IdCandidato) {
		return service.selectById(IdCandidato).get();
	}

	@PostMapping("/admin/cadastrarCandidato")
	public ResponseEntity<Candidato> save(@RequestBody Candidato candidato) {
		service.save(candidato);
		return ResponseEntity.ok().body(candidato);
	}

	@DeleteMapping("/admin/deletarCandidato/{IdCandidato}")
	public void delete(@PathVariable Long IdCandidato) {
		service.delete(IdCandidato);
	}
	
	@PutMapping("/admin/editarCandidato")
	public ResponseEntity<Candidato> update(@RequestBody Candidato candidato) {
		candidato = service.update(candidato);
		return ResponseEntity.ok().body(candidato);
	}


}
