package com.wejobr.app.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


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
	private String NomeEmpresaVaga;
	
	public Vaga() {
		
	}

	public Vaga(Long codVaga, String cargoVaga, String descricaoVaga, Double salarioVaga, String nivelInstrucaoVaga,
			String localidadeVaga, String regimeContratacaoVaga, String vagaPcd, String vagaDestaque,
			String nomeEmpresaVaga) {
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
		NomeEmpresaVaga = nomeEmpresaVaga;
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

	
	public String getNomeEmpresaVaga() {
		return NomeEmpresaVaga;
	}

	public void setNomeEmpresaVaga(String nomeEmpresaVaga) {
		NomeEmpresaVaga = nomeEmpresaVaga;
	}

	@Override
	public int hashCode() {
		return Objects.hash(CodVaga);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vaga other = (Vaga) obj;
		return Objects.equals(CodVaga, other.CodVaga);
	}

}
