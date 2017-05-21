var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource']);

angular.
module('PokemonApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/berries', {
            templateUrl: 'src/BerryList/BerryList.html',
            controller: 'BerryListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = {
        "application-id": "4257D567-62E0-857F-FFF3-CA6B403A8500",
        "secret-key": "CD0764F2-8112-8A96-FF46-87A9349A8C00"
    };

}]);
