App.controller('fasesController', ['$scope', 'FasesService', function($scope, FasesService) {
  var self = this;
  self.Fases={id:null,descricao:''};
  self.Faseses=[];

  self.fetchAllFases = function(){
      FasesService.fetchAllFases()
          .then(
                       function(d) {
                          if(d._embedded){
                       		 var result = d._embedded.fases;
                        	 self.Faseses = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createFases = function(Fases){
      FasesService.createFases(Fases)
              .then(
              self.fetchAllFases, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateFases = function(Fases, id){
      FasesService.updateFases(Fases, id)
              .then(
                      self.fetchAllFases, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteFases = function(id){
      FasesService.deleteFases(id)
              .then(
                      self.fetchAllFases, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllFases();

  self.submit = function() {
      if(self.Fases.id==null){
          console.log('Saving New User', self.Fases);    
          self.createFases(self.Fases);
      }else{
          self.updateFases(self.Fases, self.Fases.id);
          console.log('User updated with id ', self.Fases.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.Faseses.length; i++){
          if(self.Faseses[i].id == id) {
             self.Fases = angular.copy(self.Faseses[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.Faseses.length; i++){//clean form if the user to be deleted is shown there.
          if(self.Faseses[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteFases(id);
  };

   
  self.reset = function(){
      self.Fases={id:null,descricao:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);