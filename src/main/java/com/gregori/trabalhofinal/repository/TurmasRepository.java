/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gregori.trabalhofinal.repository;

import com.gregori.trabalhofinal.models.Turmas;
import java.io.Serializable;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "turmas", path = "turmas")
public interface TurmasRepository extends CrudRepository<Turmas,Long>{
    public List<Turmas> findByFase(@Param("fase") Long fase);       
    public List<Turmas> findByAge(@Param("agenda") Long age);
}
