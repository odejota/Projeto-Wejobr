package com.wejobr.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.annotation.Id;

@Entity
public class Vaga {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long CodVaga;
	private String CargoVaga;
	private String DescricaoVaga;
	private Double SalarioVaga;
	private String NivelInstrucaoVaga; 
	private String LocalidadeVaga;
	private String RegimeContratacaoVaga; 
	private String VagaPcd;
	private String VagaDestaque;
	private String LogoEmpresa;
	
	@ManyToOne
	@JoinColumn(name="empresa_IdEmpresa")
	private Empresa empresa;
	
	public Vaga() {
		
	}

	public Vaga(Long codVaga, String cargoVaga, String descricaoVaga, Double salarioVaga, String nivelInstrucaoVaga,
			String localidadeVaga, String regimeContratacaoVaga, String vagaPcd, String vagaDestaque,
			String logoEmpresa, Empresa empresa) {
		super();
		CodVaga = codVaga;
		CargoVaga = cargoVaga;
		DescricaoVaga = descricaoVaga;
		SalarioVaga = salarioVaga;
		NivelInstrucaoVaga = nivelInstrucaoVaga;
		LocalidadeVaga = localidadeVaga;
		RegimeContratacaoVaga = regimeContratacaoVaga;
		VagaPcd = vagaPcd;
		VagaDestaque = vagaDestaque;
		LogoEmpresa = logoEmpresa;
		this.empresa = empresa;
	}

	public Long getCodVaga() {
		return CodVaga;
	}

	public void setCodVaga(Long codVaga) {
		CodVaga = codVaga;
	}

	public String getCargoVaga() {
		return CargoVaga;
	}

	public void setCargoVaga(String cargoVaga) {
		CargoVaga = cargoVaga;
	}

	public String getDescricaoVaga() {
		return DescricaoVaga;
	}

	public void setDescricaoVaga(String descricaoVaga) {
		DescricaoVaga = descricaoVaga;
	}

	public Double getSalarioVaga() {
		return SalarioVaga;
	}

	public void setSalarioVaga(Double salarioVaga) {
		SalarioVaga = salarioVaga;
	}

	public String getNivelInstrucaoVaga() {
		return NivelInstrucaoVaga;
	}

	public void setNivelInstrucaoVaga(String nivelInstrucaoVaga) {
		NivelInstrucaoVaga = nivelInstrucaoVaga;
	}

	public String getLocalidadeVaga() {
		return LocalidadeVaga;
	}

	public void setLocalidadeVaga(String localidadeVaga) {
		LocalidadeVaga = localidadeVaga;
	}

	public String getRegimeContratacaoVaga() {
		return RegimeContratacaoVaga;
	}

	public void setRegimeContratacaoVaga(String regimeContratacaoVaga) {
		RegimeContratacaoVaga = regimeContratacaoVaga;
	}

	public String getVagaPcd() {
		return VagaPcd;
	}

	public void setVagaPcd(String vagaPcd) {
		VagaPcd = vagaPcd;
	}

	public String getVagaDestaque() {
		return VagaDestaque;
	}

	public void setVagaDestaque(String vagaDestaque) {
		VagaDestaque = vagaDestaque;
	}

	public String getLogoEmpresa() {
		return LogoEmpresa;
	}

	public void setLogoEmpresa(String logoEmpresa) {
		LogoEmpresa = logoEmpresa;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
	

}
