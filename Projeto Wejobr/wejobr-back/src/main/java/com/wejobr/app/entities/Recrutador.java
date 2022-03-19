package com.wejobr.app.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

@Entity
public class Recrutador {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdRecrutador;
	private String EmpresaRecrutador;
	private Integer CodEmpresa;
	private String NomeRecrutador;
	private String CargoRecrutador;
	private String DepartamentoRecrutador;
	private String EmailRecrutador;
	private String TelRecrutador;
	private String OutroContatoRecrutador;
	private String SenhaRecrutador;
	
	public Recrutador() {
		
	}

	public Recrutador(Long idRecrutador, String empresaRecrutador, Integer codEmpresa, String nomeRecrutador,
			String cargoRecrutador, String departamentoRecrutador, String emailRecrutador, String telRecrutador,
			String outroContatoRecrutador, String senhaRecrutador) {
		super();
		IdRecrutador = idRecrutador;
		EmpresaRecrutador = empresaRecrutador;
		CodEmpresa = codEmpresa;
		NomeRecrutador = nomeRecrutador;
		CargoRecrutador = cargoRecrutador;
		DepartamentoRecrutador = departamentoRecrutador;
		EmailRecrutador = emailRecrutador;
		TelRecrutador = telRecrutador;
		OutroContatoRecrutador = outroContatoRecrutador;
		SenhaRecrutador = senhaRecrutador;
	}

	public Long getIdRecrutador() {
		return IdRecrutador;
	}

	public void setIdRecrutador(Long idRecrutador) {
		IdRecrutador = idRecrutador;
	}

	public String getEmpresaRecrutador() {
		return EmpresaRecrutador;
	}

	public void setEmpresaRecrutador(String empresaRecrutador) {
		EmpresaRecrutador = empresaRecrutador;
	}

	public Integer getCodEmpresa() {
		return CodEmpresa;
	}

	public void setCodEmpresa(Integer codEmpresa) {
		CodEmpresa = codEmpresa;
	}

	public String getNomeRecrutador() {
		return NomeRecrutador;
	}

	public void setNomeRecrutador(String nomeRecrutador) {
		NomeRecrutador = nomeRecrutador;
	}

	public String getCargoRecrutador() {
		return CargoRecrutador;
	}

	public void setCargoRecrutador(String cargoRecrutador) {
		CargoRecrutador = cargoRecrutador;
	}

	public String getDepartamentoRecrutador() {
		return DepartamentoRecrutador;
	}

	public void setDepartamentoRecrutador(String departamentoRecrutador) {
		DepartamentoRecrutador = departamentoRecrutador;
	}

	public String getEmailRecrutador() {
		return EmailRecrutador;
	}

	public void setEmailRecrutador(String emailRecrutador) {
		EmailRecrutador = emailRecrutador;
	}

	public String getTelRecrutador() {
		return TelRecrutador;
	}

	public void setTelRecrutador(String telRecrutador) {
		TelRecrutador = telRecrutador;
	}

	public String getOutroContatoRecrutador() {
		return OutroContatoRecrutador;
	}

	public void setOutroContatoRecrutador(String outroContatoRecrutador) {
		OutroContatoRecrutador = outroContatoRecrutador;
	}

	public String getSenhaRecrutador() {
		return SenhaRecrutador;
	}

	public void setSenhaRecrutador(String senhaRecrutador) {
		SenhaRecrutador = senhaRecrutador;
	}

	@Override
	public int hashCode() {
		return Objects.hash(IdRecrutador);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Recrutador other = (Recrutador) obj;
		return Objects.equals(IdRecrutador, other.IdRecrutador);
	}
	
	

}
