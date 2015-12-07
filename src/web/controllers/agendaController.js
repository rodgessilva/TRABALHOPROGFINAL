App.controller('AgendaController', ['$scope', 'AgendaService', function($scope, AgendaService) {
  var self = this;
  self.Agenda={id:null,nome:''};
  self.Agendaes=[];

  self.fetchAllAgenda = function(){
      AgendaService.fetchAllAgenda()
          .then(
                       function(d) {
                          if(d._embedded){
                         		var result = d._embedded.agenda;
                          	self.Agendaes = result;
                          }
                       },
                        function(errResponse){
                            console.error('Error while fetching Currencies');
                        }
               );
  };
    
  self.createAgenda = function(Agenda){
      AgendaService.createAgenda(Agenda)
              .then(
              self.fetchAllAgenda, 
                      function(errResponse){
                           console.error('Error while creating User.');
                      } 
          );
  };

 self.updateAgenda = function(Agenda, id){
      AgendaService.updateAgenda(Agenda, id)
              .then(
                      self.fetchAllAgenda, 
                      function(errResponse){
                           console.error('Error while updating User.');
                      } 
          );
  };

 self.deleteAgenda = function(id){
      AgendaService.deleteAgenda(id)
              .then(
                      self.fetchAllAgenda, 
                      function(errResponse){
                           console.error('Error while deleting User.');
                      } 
          );
  };

  self.fetchAllAgenda();

  self.submit = function() {
      if(self.Agenda.id==null){
          console.log('Saving New User', self.Agenda);    
          self.createAgenda(self.Agenda);
      }else{
          self.updateAgenda(self.Agenda, self.Agenda.id);
          console.log('User updated with id ', self.Agenda.id);
      }
      self.reset();
  };
       
  self.edit = function(id){
      console.log('id to be edited', id);
      for(var i = 0; i < self.Agendaes.length; i++){
          if(self.Agendaes[i].id == id) {
             self.Agenda = angular.copy(self.Agendaes[i]);
             break;
          }
      }
  };
       
  self.remove = function(id){
      console.log('id to be deleted', id);
      for(var i = 0; i < self.Agendaes.length; i++){//clean form if the user to be deleted is shown there.
          if(self.Agendaes[i].id == id) {
             self.reset();
             break;
          }
      }
      self.deleteAgenda(id);
  };

   
  self.reset = function(){
      self.Agenda={id:null,nome:''};
      $scope.myForm.$setPristine(); //reset Form
  };

}]);