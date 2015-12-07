App.controller('DisciplinasController', ['$scope', 'DisciplinasService', function($scope, DisciplinasService) {
  var self = this;
  self.Disciplinas={id:null,nome:''};
  self.Disciplinases=[];

  self.fetchAllDisciplinas = function(){
      DisciplinasService.fetchAllDisciplinas()
          .then(
                       function(d) {
                          if(d._embedded){
                       		 var result = d._embedded.disciplinas;
                        	 self.Disciplinases = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createDisciplinas = function(Disciplinas){
  		console.info(Disciplinas);
      DisciplinasService.createDisciplinas(Disciplinas)
              .then(
              self.fetchAllDisciplinas, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateDisciplinas = function(Disciplinas, id){
      DisciplinasService.updateDisciplinas(Disciplinas, id)
              .then(
                      self.fetchAllDisciplinas, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteDisciplinas = function(id){
      DisciplinasService.deleteDisciplinas(id)
              .then(
                      self.fetchAllDisciplinas, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllDisciplinas();

  self.submit = function() {
      if(self.Disciplinas.id==null){
          console.log('Saving New User', self.Disciplinas);    
          self.createDisciplinas(self.Disciplinas);
      }else{
          self.updateDisciplinas(self.Disciplinas, self.Disciplinas.id);
          console.log('User updated with id ', self.Disciplinas.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.Disciplinases.length; i++){
          if(self.Disciplinases[i].id == id) {
             self.Disciplinas = angular.copy(self.Disciplinases[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.Disciplinases.length; i++){//clean form if the user to be deleted is shown there.
          if(self.Disciplinases[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteDisciplinas(id);
  };

   
  self.reset = function(){
      self.Disciplinas={id:null,nome:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);