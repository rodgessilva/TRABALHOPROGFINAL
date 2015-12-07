/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gregori.trabalhofinal.repository;

import com.gregori.trabalhofinal.models.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 *
 * @author luiz.costa
 */
@Configuration
public class RepositoryConfig extends RepositoryRestMvcConfiguration {
    
    @Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Agenda.class,
                            Coordenador.class,
                            Disciplinas.class,
                            Fases.class,
                            Professor.class,
                            Turmas.class);
    }
}