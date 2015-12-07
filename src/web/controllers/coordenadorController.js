App.controller('coordenadorController', ['$scope', 'coordenadorService', function($scope, coordenadorService) {
  var self = this;
  self.coordenador={id:null,nome:''};
  self.coordenadores=[];

  self.fetchAllCoordenador = function(){
      coordenadorService.fetchAllCoordenador()
          .then(
                       function(d) {
                          if(d._embedded){
                         		var result = d._embedded.coordenador;
                          	self.coordenadores = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createCoordenador = function(coordenador){
      coordenadorService.createCoordenador(coordenador)
              .then(
              self.fetchAllCoordenador, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateCoordenador = function(coordenador, id){
      coordenadorService.updateCoordenador(coordenador, id)
              .then(
                      self.fetchAllCoordenador, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteCoordenador = function(id){
      coordenadorService.deleteCoordenador(id)
              .then(
                      self.fetchAllCoordenador, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllCoordenador();

  self.submit = function() {
      if(self.coordenador.id==null){
          console.log('Saving New User', self.coordenador);    
          self.createCoordenador(self.coordenador);
      }else{
          self.updateCoordenador(self.coordenador, self.coordenador.id);
          console.log('User updated with id ', self.coordenador.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.coordenadores.length; i++){
          if(self.coordenadores[i].id == id) {
             self.coordenador = angular.copy(self.coordenadores[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.coordenadores.length; i++){//clean form if the user to be deleted is shown there.
          if(self.coordenadores[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteCoordenador(id);
  };

   
  self.reset = function(){
      self.coordenador={id:null,nome:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);