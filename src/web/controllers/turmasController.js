App.controller('TurmasController', ['$scope', 'TurmasService', function($scope, TurmasService) {
  var self = this;
  self.Turmas={id:null,descricao:''};
  self.Turmases=[];

  self.fetchAllTurmas = function(){
      TurmasService.fetchAllTurmas()
          .then(
                       function(d) {
                          if(d._embedded){
                         		var result = d._embedded.turmas;
                          	self.Turmases = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createTurmas = function(Turmas){
      TurmasService.createTurmas(Turmas)
              .then(
              self.fetchAllTurmas, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateTurmas = function(Turmas, id){
      TurmasService.updateTurmas(Turmas, id)
              .then(
                      self.fetchAllTurmas, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteTurmas = function(id){
      TurmasService.deleteTurmas(id)
              .then(
                      self.fetchAllTurmas, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllTurmas();

  self.submit = function() {
      if(self.Turmas.id==null){
          console.log('Saving New User', self.Turmas);    
          self.createTurmas(self.Turmas);
      }else{
          self.updateTurmas(self.Turmas, self.Turmas.id);
          console.log('User updated with id ', self.Turmas.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.Turmases.length; i++){
          if(self.Turmases[i].id == id) {
             self.Turmas = angular.copy(self.Turmases[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.Turmases.length; i++){//clean form if the user to be deleted is shown there.
          if(self.Turmases[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteTurmas(id);
  };

   
  self.reset = function(){
      self.Turmas={id:null,descricao:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);