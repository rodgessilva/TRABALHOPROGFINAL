'use strict';
 
App.factory('DisciplinasService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllDisciplinas: function() {
                    return $http.get('http://localhost:8080/disciplinas/')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching users');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            createDisciplinas: function(Disciplinas){
                    return $http.post('http://localhost:8080/disciplinas/', Disciplinas)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            updateDisciplinas: function(Disciplinas, id){
                    return $http.put('http://localhost:8080/disciplinas/'+id, Disciplinas)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            deleteDisciplinas: function(id){
                    return $http.delete('http://localhost:8080/disciplinas/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while deleting user');
                                        return $q.reject(errResponse);
                                    }
                            );
            }
         
    };
 
}]);