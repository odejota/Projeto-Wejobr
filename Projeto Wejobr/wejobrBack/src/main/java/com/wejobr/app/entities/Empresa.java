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
	private String CnpjEmpresa;
	private String CepEmpresa;
	private String RamoEmpresa;
	private String TelefoneEmpresa;
	private String LinkedinEmpresa;
	

	public Empresa(){
		
	}

	public Empresa(Long idEmpresa, String nomeEmpresa, String cnpjEmpresa, String cepEmpresa, String ramoEmpresa,
			String telefoneEmpresa, String linkedinEmpresa) {
		super();
		IdEmpresa = idEmpresa;
		NomeEmpresa = nomeEmpresa;
		CnpjEmpresa = cnpjEmpresa;
		CepEmpresa = cepEmpresa;
		RamoEmpresa = ramoEmpresa;
		TelefoneEmpresa = telefoneEmpresa;
		LinkedinEmpresa = linkedinEmpresa;
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

	public String getCnpjEmpresa() {
		return CnpjEmpresa;
	}

	public void setCnpjEmpresa(String cnpjEmpresa) {
		CnpjEmpresa = cnpjEmpresa;
	}

	public String getCepEmpresa() {
		return CepEmpresa;
	}

	public void setCepEmpresa(String cepEmpresa) {
		CepEmpresa = cepEmpresa;
	}

	public String getRamoEmpresa() {
		return RamoEmpresa;
	}

	public void setRamoEmpresa(String ramoEmpresa) {
		RamoEmpresa = ramoEmpresa;
	}

	public String getTelefoneEmpresa() {
		return TelefoneEmpresa;
	}

	public void setTelefoneEmpresa(String telefoneEmpresa) {
		TelefoneEmpresa = telefoneEmpresa;
	}

	public String getLinkedinEmpresa() {
		return LinkedinEmpresa;
	}

	public void setLinkedinEmpresa(String linkedinEmpresa) {
		LinkedinEmpresa = linkedinEmpresa;
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
