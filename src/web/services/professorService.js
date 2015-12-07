'use strict';
 
App.factory('professorService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllProfessor: function() {
                    return $http.get('http://localhost:8080/professor/')
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
             
            createProfessor: function(professor){
                    return $http.post('http://localhost:8080/professor/', professor)
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
             
            updateProfessor: function(professor, id){
                    return $http.put('http://localhost:8080/professor/'+id, professor)
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
             
            deleteProfessor: function(id){
                    return $http.delete('http://localhost:8080/professor/'+id)
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