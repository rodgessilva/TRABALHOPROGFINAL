/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gregori.trabalhofinal.repository;

import com.gregori.trabalhofinal.models.Professor;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "professor", path = "professor")
public interface ProfessorRepository extends CrudRepository<Professor,Long>{
    public List<Professor> findByNome(@Param("nome") String nome);  
    public List<Professor> findByAgenda(@Param("id") Long agenda);
}
