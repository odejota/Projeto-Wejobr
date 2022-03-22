/*package com.wejobr.app.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

public class InMemorySC {

	public void configureGlobal(AuthenticationManagerBuilder builder) throws Exception{
		PasswordEncoder passwordEncoder =
				 PasswordEncoderFactories.createDelegatingPasswordEncoder();
	
	builder
	.inMemoryAuthentication()
	 .withUser("recrutador1").password(passwordEncoder.encode("@b@c@te"))
	 .roles("ADMIN", "USER") .and()
	 .withUser("recrutador2").password(passwordEncoder.encode("mel@nci@"))
	 .roles("ADMIN", "USER") .and()
	 .withUser("admin1").password(passwordEncoder.encode("pit@ya"))
	 .roles("ADMIN", "USER") .and()
	 .withUser("admin2").password(passwordEncoder.encode("m@r@cuj@"))
	 .roles("ADMIN", "USER") .and()
	 .withUser("cliente1").password(passwordEncoder.encode("@b@c@xi"))
	 .roles("USER") .and()
	 .withUser("cliente2").password(passwordEncoder.encode("m@c@verde"))
	 .roles("USER") .and()
	 .withUser("cliente3").password(passwordEncoder.encode("mexeric@"))
	 .roles("USER");
}
	
}*/
