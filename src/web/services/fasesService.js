'use strict';
 
App.factory('FasesService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllFases: function() {
                    return $http.get('http://localhost:8080/fases/')
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
             
            createFases: function(Fases){
                    return $http.post('http://localhost:8080/fases/', Fases)
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
             
            updateFases: function(Fases, id){
                    return $http.put('http://localhost:8080/fases/'+id, Fases)
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
             
            deleteFases: function(id){
                    return $http.delete('http://localhost:8080/fases/'+id)
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