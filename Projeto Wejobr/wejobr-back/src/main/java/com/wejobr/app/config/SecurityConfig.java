package com.wejobr.app.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private Environment env;

	//@Autowired
	//private UserService userService;

	/*
	 * @Override protected void configure(AuthenticationManagerBuilder auth) throws
	 * Exception { PasswordEncoder passwordEncoder =
	 * PasswordEncoderFactories.createDelegatingPasswordEncoder();
	 * auth.inMemoryAuthentication()
	 * .withUser("recrutador1").password(passwordEncoder.encode("@b@c@te"))
	 * .roles("ADMIN", "USER") .and()
	 * .withUser("recrutador2").password(passwordEncoder.encode("mel@nci@"))
	 * .roles("ADMIN", "USER") .and()
	 * .withUser("admin1").password(passwordEncoder.encode("pit@ya"))
	 * .roles("ADMIN", "USER") .and()
	 * .withUser("admin2").password(passwordEncoder.encode("m@r@cuj@"))
	 * .roles("ADMIN", "USER") .and()
	 * .withUser("cliente1").password(passwordEncoder.encode("@b@c@xi"))
	 * .roles("USER") .and()
	 * .withUser("cliente2").password(passwordEncoder.encode("m@c@verde"))
	 * .roles("USER") .and()
	 * .withUser("cliente3").password(passwordEncoder.encode("mexeric@"))
	 * .roles("USER"); System.out.println("PASSWORD1" +
	 * passwordEncoder.encode("@mor@")); System.out.println("PASSWORD2" +
	 * passwordEncoder.encode("b@n@n@")); System.out.println("PASSWORD3" +
	 * passwordEncoder.encode("j@butic@b@"));
	 * 
	 * auth.userDetailsService(userService).passwordEncoder(passwordEncoder); }
	 * 
	 * @Override protected void configure(HttpSecurity http) throws Exception {
	 * http.csrf().disable().authorizeRequests()
	 * .antMatchers("/destinos/admin/**").hasRole("ADMIN")
	 * .antMatchers("/destinos/**").hasRole("USER")
	 * .anyRequest().authenticated().and() .formLogin().and().httpBasic(); }
	 */

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}

		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeRequests().anyRequest().permitAll();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

}
