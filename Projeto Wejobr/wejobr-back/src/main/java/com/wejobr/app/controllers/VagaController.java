package com.wejobr.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wejobr.app.entities.Vaga;
import com.wejobr.app.services.VagaService;

@RestController
@RequestMapping ("/vagas")
//@CrossOrigin(origins = "http://localhost:3000")
public class VagaController {
	
	@Autowired
	private VagaService service;
	
	@GetMapping
	public List<Vaga> select() {
		return service.select();
	}
	
	@GetMapping("/{CodVaga}")
	public Vaga selectedById(@PathVariable Long CodVaga) {
		return service.selectById(CodVaga).get();
	}
	

	@PostMapping("/admin/cadastrarVaga")
	public Vaga insert(@RequestBody Vaga vaga) {
		return service.insert(vaga);
	}

	@DeleteMapping("/admin/deletarVaga/{CodVaga}")
	public void delete(@PathVariable Long CodVaga) {
		service.delete(CodVaga);
	}
	
	@PutMapping("/admin/editarEmpresa")
	public void update(@RequestBody Vaga vaga) {
		service.update(vaga);
	}

}
