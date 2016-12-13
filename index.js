angular.module("PizzaApp", [])
    .controller("PizzaConstructor", function ($scope) {
        $scope.bases = [{name: 'Тонкое дрожжевое тесто', price: 30},
            {name: 'Пышное дрожжевое тесто', price: 35},
            {name: 'Слоёное тесто', price: 40}];

        $scope.souces = [{name: 'Белый', price: 35},
            {name: 'Томатный', price: 35},
            {name: 'Сырный', price: 40}];

        $scope.ingridients = [{name: "Помидоры", price: 20},
            {name: "Сыр", price: 70},
            {name: "Грибы", price: 40},
            {name: "Ветчина", price: 60},
            {name: "Петрушка", price: 15},
            {name: "Оливки", price: 30}];


        $scope.RemoveIngridient = function (ing) {
            $scope.pizza.ingridients = _.without($scope.pizza.ingridients, ing);

            $scope.ingridients.push(ing);
        }

        $scope.TotalPrice = function()
        {
            return $scope.pizza.base.price +
                   $scope.pizza.souce.price +
                   _.reduce($scope.pizza.ingridients, function (memo, ing) {
                            return memo + ing.price*ing.count;
                    },0);
        }

        $scope.AddIngridient = function ()
        {
            $scope.ingridients = _.without($scope.ingridients, $scope.currentIngridient);
            $scope.currentIngridient.count = 1;
            $scope.pizza.ingridients.push($scope.currentIngridient);
        }

        $scope.pizza = {base: $scope.bases[0],
                        souce: $scope.souces[0],
                        ingridients: [ ]
        };

    });