var app = angular.module('loanApp', []);

app.controller('calculateCtrl', ['$scope', function ($scope) {
   
    /*Getting all values from the function for labelling the elements in index page */
    $scope.loanAmountSuffix = getContent().loanAmountSuffix;
    $scope.monthlyCostLabel= getContent().monthlyCostLabel;
    $scope.loanAmountLabel= getContent().loanAmountLabel;
    $scope.repaymentYearsLabel= getContent().repaymentYearsLabel;
    $scope.repaymentYearsSuffix= getContent().repaymentYearsSuffix;
    $scope.monthlyCostSuffix= getContent().monthlyCostSuffix;
    $scope.ctaLabel= getContent().ctaLabel;
    $scope.interest=getContent().interest;

    /*Setting Default values for the input boxes and Monthly EMI result */

    $scope.Amount = "250000";
    $scope.Years = "14";
    $scope.result=2173;

    /*Specifying conditions for +/- Buttons for not adding values more than limit and increment and decrement accordingly tospecified conditions */
    
    $scope.ADD = function () {
        if ($scope.Amount >= 600000) {
            return;
        } else {

            $scope.Amount = parseInt($scope.Amount) + 5000;
        }

    }
    $scope.SUB = function () {
        if ($scope.Amount <= 5000) {
            return;
        } else {

            $scope.Amount = parseInt($scope.Amount) - 5000;
        }
    }
    $scope.Add_years = function () {

        if ($scope.Years >= 15) {
            return;
        } else {
            $scope.Years = parseInt($scope.Years) + 1;
        }
    }
    $scope.Sub_years = function () {

        if ($scope.Years <= 1) {
            return;
        } else {
            $scope.Years = parseInt($scope.Years) - 1;
        }
    }

    /*Main Function to calulate the EMI for Specified Values. */
    $scope.Calculate = function (loanAmount, repaymentYears, rate) {

        loanAmount = parseInt(loanAmount);  /* converting values from String input to Integers*/
        repaymentYears = parseInt(repaymentYears);
        
        // if(isNaN(loanAmount)||isNaN(repaymentYears))

        // {
        //     alert("Please Enter number values only");
        // }
        // else{
        var months = parseInt(repaymentYears) * 12; /*Specifying Formula for calculating values */
        $scope.result=Math.round(parseInt(loanAmount) * (rate / 100) / 12 / (1 - Math.pow(1 + (rate / 100) / 12, (months * -1))));        
        // }
        // console.log($scope.result);
    }

    /* Function for Naming Labels to prevent Hard Coding*/
   function getContent() {
        return {
            "monthlyCostLabel": "Månadskostnad",
            "monthlyCostSuffix": "kr",
            "loanAmountLabel": "Lånebelopp",
            "loanAmountSuffix": "kr",
            "repaymentYearsLabel": "Återbetalningstid",
            "repaymentYearsSuffix": "år",
            "ctaLabel": "Ansök nu",
            "interest": 5.77
        };
    }

}]);
