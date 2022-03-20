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

import com.wejobr.app.entities.Recrutador;
import com.wejobr.app.services.RecrutadorService;

@RestController
@RequestMapping ("/recrutadores")
//@CrossOrigin(origins = "http://localhost:3000")
public class RecrutadorController {
	
	@Autowired
	private RecrutadorService service;
	
	@GetMapping("/admin/listarTodos")
	public List<Recrutador> select() {
		return service.select();
	}
	
	@GetMapping("/admin/listarPorId/{IdRecrutador}")
	public Recrutador selectedById(@PathVariable Long IdRecrutador) {
		return service.selectById(IdRecrutador).get();
	}

	@PostMapping("/admin/cadastrarRecrutador")
	public Recrutador insert(@RequestBody Recrutador recrutador) {
		return service.insert(recrutador);
	}

	@DeleteMapping("/admin/deletarRecrutador/{IdRecrutador}")
	public void delete(@PathVariable Long IdRecrutador) {
		service.delete(IdRecrutador);
	}
	
	@PutMapping("/admin/editarRecrutador")
	public void update(@RequestBody Recrutador recrutador) {
		service.update(recrutador);
}

}
