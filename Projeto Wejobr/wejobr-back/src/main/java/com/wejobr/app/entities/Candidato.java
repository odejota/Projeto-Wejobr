package com.wejobr.app.entities;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Candidato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdCandidato;
	private String NomeCandidato;
	private Date NascimentoCandidato;
	private String EstadoCivilCandidato;
	private String NacionalidadeCandidato;
	private String CodIdentificacao;
	private String EmailCandidato;
	private String Cargo1Candidato;
	private String Cargo2Candidato;
	private String Cargo3Candidato;
	private String SenhaCandidato;
	
	public Candidato() {
		
	}

	public Candidato(Long idCandidato, String nomeCandidato, Date nascimentoCandidato, String estadoCivilCandidato,
			String nacionalidadeCandidato, String codIdentificacao, String emailCandidato, String cargo1Candidato,
			String cargo2Candidato, String cargo3Candidato, String senhaCandidato) {
		super();
		IdCandidato = idCandidato;
		NomeCandidato = nomeCandidato;
		NascimentoCandidato = nascimentoCandidato;
		EstadoCivilCandidato = estadoCivilCandidato;
		NacionalidadeCandidato = nacionalidadeCandidato;
		CodIdentificacao = codIdentificacao;
		EmailCandidato = emailCandidato;
		Cargo1Candidato = cargo1Candidato;
		Cargo2Candidato = cargo2Candidato;
		Cargo3Candidato = cargo3Candidato;
		SenhaCandidato = senhaCandidato;
	}

	public Long getIdCandidato() {
		return IdCandidato;
	}

	public void setIdCandidato(Long idCandidato) {
		IdCandidato = idCandidato;
	}

	public String getNomeCandidato() {
		return NomeCandidato;
	}

	public void setNomeCandidato(String nomeCandidato) {
		NomeCandidato = nomeCandidato;
	}

	public Date getNascimentoCandidato() {
		return NascimentoCandidato;
	}

	public void setNascimentoCandidato(Date nascimentoCandidato) {
		NascimentoCandidato = nascimentoCandidato;
	}

	public String getEstadoCivilCandidato() {
		return EstadoCivilCandidato;
	}

	public void setEstadoCivilCandidato(String estadoCivilCandidato) {
		EstadoCivilCandidato = estadoCivilCandidato;
	}

	public String getNacionalidadeCandidato() {
		return NacionalidadeCandidato;
	}

	public void setNacionalidadeCandidato(String nacionalidadeCandidato) {
		NacionalidadeCandidato = nacionalidadeCandidato;
	}

	public String getCodIdentificacao() {
		return CodIdentificacao;
	}

	public void setCodIdentificacao(String codIdentificacao) {
		CodIdentificacao = codIdentificacao;
	}

	public String getEmailCandidato() {
		return EmailCandidato;
	}

	public void setEmailCandidato(String emailCandidato) {
		EmailCandidato = emailCandidato;
	}

	public String getCargo1Candidato() {
		return Cargo1Candidato;
	}

	public void setCargo1Candidato(String cargo1Candidato) {
		Cargo1Candidato = cargo1Candidato;
	}

	public String getCargo2Candidato() {
		return Cargo2Candidato;
	}

	public void setCargo2Candidato(String cargo2Candidato) {
		Cargo2Candidato = cargo2Candidato;
	}

	public String getCargo3Candidato() {
		return Cargo3Candidato;
	}

	public void setCargo3Candidato(String cargo3Candidato) {
		Cargo3Candidato = cargo3Candidato;
	}

	public String getSenhaCandidato() {
		return SenhaCandidato;
	}

	public void setSenhaCandidato(String senhaCandidato) {
		SenhaCandidato = senhaCandidato;
	}

	@Override
	public int hashCode() {
		return Objects.hash(IdCandidato);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Candidato other = (Candidato) obj;
		return Objects.equals(IdCandidato, other.IdCandidato);
	}
	
	

}
