package com.jharkhand.darshan.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Jharkhand Darshan - Tourism & Travel Portal API")
                        .version("1.0.0")
                        .description("Official backend REST API for Jharkhand Darshan supporting 3D Explorer, Hotel/Guide Bookings, Live Virtual Tourism, and Tribal Marketplace.")
                        .contact(new Contact()
                                .name("Department of Tourism, Government of Jharkhand")
                                .email("tourism@jharkhand.gov.in")
                                .url("https://tourism.jharkhand.gov.in"))
                        .license(new License().name("Apache 2.0").url("https://springdoc.org")));
    }
}
