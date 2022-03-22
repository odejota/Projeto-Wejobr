package com.wejobr.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
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
@CrossOrigin(origins = "https://wejobr.netlify.app/")
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
	public ResponseEntity<Empresa> save(@RequestBody Empresa empresa) {
		service.save(empresa);
		return ResponseEntity.ok().body(empresa);
	}

	@DeleteMapping("/admin/deletarEmpresa/{IdEmpresa}")
	public void delete(@PathVariable Long IdEmpresa) {
		service.delete(IdEmpresa);
	}
	
	@PutMapping("/admin/editarEmpresa")
	public ResponseEntity<Empresa> update(@RequestBody Empresa empresa) {
		empresa = service.update(empresa);
		return ResponseEntity.ok().body(empresa);
	}

}
