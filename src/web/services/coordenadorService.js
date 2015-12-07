'use strict';
 
App.factory('coordenadorService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllCoordenador: function() {
                    return $http.get('http://localhost:8080/coordenador/')
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
             
            createCoordenador: function(coordenador){
                    return $http.post('http://localhost:8080/coordenador/', coordenador)
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
             
            updateCoordenador: function(coordenador, id){
                    return $http.put('http://localhost:8080/coordenador/'+id, coordenador)
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
             
            deleteCoordenador: function(id){
                    return $http.delete('http://localhost:8080/coordenador/'+id)
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