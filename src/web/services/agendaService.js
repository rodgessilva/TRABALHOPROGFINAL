'use strict';
 
App.factory('AgendaService', ['$http', '$q', function($http, $q){
 
    return {
         
            fetchAllAgenda: function() {
                    return $http.get('http://localhost:8080/agenda/')
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
             
            createAgenda: function(Agenda){
                    return $http.post('http://localhost:8080/agenda/', Agenda)
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
             
            updateAgenda: function(Agenda, id){
                    return $http.put('http://localhost:8080/agenda/'+id, Agenda)
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
             
            deleteAgenda: function(id){
                    return $http.delete('http://localhost:8080/agenda/'+id)
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