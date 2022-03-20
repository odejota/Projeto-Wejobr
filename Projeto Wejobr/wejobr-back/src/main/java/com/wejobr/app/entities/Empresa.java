package com.wejobr.app.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Empresa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdEmpresa;
	private String NomeEmpresa;
	private String Cnpj_empresa;
	private String Cep_empresa;
	private String Ramo_empresa;
	private String Telefone_empresa;
	private String Linkedin_empresa;
	

	public Empresa(){
		
	}


	public Empresa(Long idEmpresa, String nomeEmpresa, String cnpj_empresa, String cep_empresa, String ramo_empresa,
			String telefone_empresa, String linkedin_empresa) {
		super();
		IdEmpresa = idEmpresa;
		NomeEmpresa = nomeEmpresa;
		Cnpj_empresa = cnpj_empresa;
		Cep_empresa = cep_empresa;
		Ramo_empresa = ramo_empresa;
		Telefone_empresa = telefone_empresa;
		Linkedin_empresa = linkedin_empresa;
	}


	public Long getIdEmpresa() {
		return IdEmpresa;
	}


	public void setIdEmpresa(Long idEmpresa) {
		IdEmpresa = idEmpresa;
	}


	public String getNomeEmpresa() {
		return NomeEmpresa;
	}


	public void setNomeEmpresa(String nomeEmpresa) {
		NomeEmpresa = nomeEmpresa;
	}


	public String getCnpj_empresa() {
		return Cnpj_empresa;
	}


	public void setCnpj_empresa(String cnpj_empresa) {
		Cnpj_empresa = cnpj_empresa;
	}


	public String getCep_empresa() {
		return Cep_empresa;
	}


	public void setCep_empresa(String cep_empresa) {
		Cep_empresa = cep_empresa;
	}


	public String getRamo_empresa() {
		return Ramo_empresa;
	}


	public void setRamo_empresa(String ramo_empresa) {
		Ramo_empresa = ramo_empresa;
	}


	public String getTelefone_empresa() {
		return Telefone_empresa;
	}


	public void setTelefone_empresa(String telefone_empresa) {
		Telefone_empresa = telefone_empresa;
	}


	public String getLinkedin_empresa() {
		return Linkedin_empresa;
	}


	public void setLinkedin_empresa(String linkedin_empresa) {
		Linkedin_empresa = linkedin_empresa;
	}


	@Override
	public int hashCode() {
		return Objects.hash(IdEmpresa);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Empresa other = (Empresa) obj;
		return Objects.equals(IdEmpresa, other.IdEmpresa);
	}
	
	

}
