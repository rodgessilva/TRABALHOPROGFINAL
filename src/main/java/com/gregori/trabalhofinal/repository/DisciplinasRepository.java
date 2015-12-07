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
import com.gregori.trabalhofinal.models.Disciplinas;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "disciplinas", path = "disciplinas")
public interface DisciplinasRepository extends CrudRepository<Disciplinas,Long>{
    public List<Disciplinas> findByFase(@Param("fase") Long fase);
    public List<Disciplinas> findByNome(@Param("nome") String nome);
}
