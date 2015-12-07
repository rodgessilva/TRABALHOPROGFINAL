/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gregori.trabalhofinal.repository;

import com.gregori.trabalhofinal.models.Coordenador;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "coordenador", path = "coordenador")
public interface CoordenadorRepository extends CrudRepository<Coordenador,Long>{
    public List<Coordenador> findByNome(@Param("nome") String nome);
}
