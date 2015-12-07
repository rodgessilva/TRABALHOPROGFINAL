/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gregori.trabalhofinal.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.gregori.trabalhofinal.models.Agenda;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "agenda", path = "agenda")
public interface AgendaRepository extends CrudRepository<Agenda,Long>{
    public List<Agenda> findByTurma(@Param("id") Long turma);
    public List<Agenda> findByDisc(@Param("id") Long disc);
}
