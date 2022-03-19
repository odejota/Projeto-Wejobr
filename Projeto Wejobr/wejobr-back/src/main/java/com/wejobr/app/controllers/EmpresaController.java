package com.wejobr.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wejobr.app.entities.Empresa;
import com.wejobr.app.services.EmpresaService;

@RestController
@RequestMapping ("/empresas")
//@CrossOrigin(origins = "http://localhost:3000")
public class EmpresaController {
	
	@Autowired
	private EmpresaService service;
	
	@GetMapping
	public List<Empresa> select() {
		return service.select();
	}
	
	@GetMapping("/{IdEmpresa}")
	public Empresa selectedById(@PathVariable Long IdEmpresa) {
		return service.selectById(IdEmpresa).get();
	}

	@PostMapping("/admin/cadastrarEmpresa")
	public Empresa insert(@RequestBody Empresa empresa) {
		return service.insert(empresa);
	}

	@DeleteMapping("/admin/{IdCandidato}")
	public void delete(@PathVariable Long IdEmpresa) {
		service.delete(IdEmpresa);
	}
	
	@PutMapping("/admin/editarEmpresa")
	public void update(@RequestBody Empresa empresa) {
		service.update(empresa);
	}

}
