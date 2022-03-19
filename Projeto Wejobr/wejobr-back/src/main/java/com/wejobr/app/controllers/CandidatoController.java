package com.wejobr.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
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
//@CrossOrigin(origins = "http://localhost:3000")
public class CandidatoController {
	
	@Autowired
	private CandidatoService service;
	
	@GetMapping
	public List<Candidato> select() {
		return service.select();
	}
	
	@GetMapping("/{IdCandidato}")
	public Candidato selectedById(@PathVariable Long IdCandidato) {
		return service.selectById(IdCandidato).get();
	}

	@PostMapping("/admin/cadastrarCandidato")
	public Candidato insert(@RequestBody Candidato candidato) {
		return service.insert(candidato);
	}

	@DeleteMapping("/admin/deletarCandidato/{IdCandidato}")
	public void delete(@PathVariable Long IdCandidato) {
		service.delete(IdCandidato);
	}
	
	@PutMapping("/admin/editarCandidato")
	public void update(@RequestBody Candidato candidato) {
		service.update(candidato);
}

}
