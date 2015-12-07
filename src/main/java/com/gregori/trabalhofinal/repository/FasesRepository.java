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
import com.gregori.trabalhofinal.models.Fases;

/**
 *
 * @author luiz.costa
 */
@RepositoryRestResource(collectionResourceRel = "fases", path = "fases")
public interface FasesRepository extends CrudRepository<Fases,Long>{
    public List<Fases> findById(@Param("id") Long id);
    public List<Fases> findByDescricao(@Param("id") String desc);
}
