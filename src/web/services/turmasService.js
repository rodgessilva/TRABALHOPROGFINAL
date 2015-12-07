'use strict';
 
App.factory('TurmasService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllTurmas: function() {
                    return $http.get('http://localhost:8080/turmas/')
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
             
            createTurmas: function(Turmas){
                    return $http.post('http://localhost:8080/turmas/', Turmas)
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
             
            updateTurmas: function(Turmas, id){
                    return $http.put('http://localhost:8080/turmas/'+id, Turmas)
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
             
            deleteTurmas: function(id){
                    return $http.delete('http://localhost:8080/turmas/'+id)
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