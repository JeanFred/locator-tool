angular.module('app').controller('InputController', function(ltData, $state) {
  var vm = this;
  vm.getCategoriesForPrefix = function() {
    ltData.getCategoriesForPrefix(vm.category).then(function(categories) {
      vm.categorySuggestions = categories;
    });
  };
  vm.getFilesForUser = function() {
    ltData.getFilesForUser(vm.user).then(function(files) {
      vm.titles = files && files.join('\n');
    });
  };
  vm.getFilesForCategory = function() {
    ltData.getFilesForCategory(vm.category).then(function(files) {
      vm.titles = files && files.join('\n');
    });
  };
  vm.next = function() {
    $state.go('list', {titles: getTitles().join('|')});
  };

  function getTitles() {
    return vm.titles.split('\n').map(function(file) {
      return file && file.split('|')[0];
    });
  }
});
