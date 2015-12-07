App.controller('professorController', ['$scope', 'professorService', function($scope, professorService) {
  var self = this;
  self.professor={id:null,nome:''};
  self.professores=[];

  self.fetchAllProfessor = function(){
      professorService.fetchAllProfessor()
          .then(
                       function(d) {
                          if(d._embedded){
                       		 var result = d._embedded.professor;
                        	 self.professores = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createProfessor = function(professor){
      professorService.createProfessor(professor)
              .then(
              self.fetchAllProfessor, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateProfessor = function(professor, id){
      professorService.updateProfessor(professor, id)
              .then(
                      self.fetchAllProfessor, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteProfessor = function(id){
      professorService.deleteProfessor(id)
              .then(
                      self.fetchAllProfessor, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllProfessor();

  self.submit = function() {
      if(self.professor.id==null){
          console.log('Saving New User', self.professor);    
          self.createProfessor(self.professor);
      }else{
          self.updateProfessor(self.professor, self.professor.id);
          console.log('User updated with id ', self.professor.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.professores.length; i++){
          if(self.professores[i].id == id) {
             self.professor = angular.copy(self.professores[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.professores.length; i++){//clean form if the user to be deleted is shown there.
          if(self.professores[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteProfessor(id);
  };

   
  self.reset = function(){
      self.professor={id:null,nome:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);