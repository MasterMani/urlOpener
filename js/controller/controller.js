angular
  .module("urlOpener")
  .controller("myCtrl", ["$scope", "$window", function($scope, $window){
    // $scope.urlsArr = [];
    // $scope.inValidUrls = [];
    $scope.openUrls = function(){
      var b = $scope.textArea;
      $scope.urlsArr = [];
      $scope.inValidUrls = [];
      if(b){
        b.replace(/\t/g, "\n")
          .split("\n").forEach(function(url, idx){
            var url = httpCheck(url, $scope.inValidUrls);
            if(url){
              $scope.urlsArr.push(url);
              $window.open(url);
            }
          });
      }
    }

    $scope.upcOpen = function(){concat(true, true)}
    $scope.concateOpen = function(){concat(true);}
    $scope.concateOnly = function(){concat(false);}
    $scope.upcCheck = function(){concat(false, true, true)}

    function concat(isOpen, isUpc, addHttp){
      var a = addHttp ? "http://" : $scope.firstPtrn,
          b = $scope.textArea,
          c = $scope.secondPtrn ? $scope.secondPtrn : (addHttp ? ".com" : "");
      $scope.urlsArr = [];
      $scope.inValidUrls = [];
      $scope.inValidUpcs = [];
      $scope.validUpcs = [];
      if(a && b){
        b.replace(/\t/g, "\n")
          .split("\n").forEach(function(sku, idx){
          if(isUpc){
            if(sku.length < 11 && sku.length >= 10){
              for(var i=0;i<11;i++){
                if(sku.length == 11) break
                sku ="0"+sku;
              }
            }
            var upc = sku.length == 11 ? checkUpc(sku) : sku;
            var url = httpCheck(a + upc + c, $scope.inValidUrls);
            if(url){
              $scope.urlsArr.push(url);
              if(isUpc && (url.replace("http://", "").replace(".com", "").length <10)){
                $scope.inValidUpcs.push(url)
              }else{$scope.validUpcs.push(url)}
              if(isOpen){
                $window.open(url);
              }
            }
          }else{
            var url = httpCheck(a + sku + c, $scope.inValidUrls);
            if(url){
              $scope.urlsArr.push(url);
              if(isOpen){
                $window.open(url);
              }
            }
          }
        });
      }
    }

    function httpCheck(url, arr){
      if(url == "NA"){
        arr.push(url);
      }else{
        if(url.indexOf('http://') == -1 && url.indexOf('https://') == -1){
          return checkPattern("http://" + url, arr)
        }
        return checkPattern(url, arr)
      }
      
    }

    function checkPattern(url, arr){
      if(url.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i)){
        return url
      }else{
        arr.push(url)
      }
    }

    function checkUpc(upc){
      var add = parseInt(upc.charAt(0)) + parseInt(upc.charAt(2)) + parseInt(upc.charAt(4)) + parseInt(upc.charAt(6)) + parseInt(upc.charAt(8)) + parseInt(upc.charAt(10));
      add = (add*3) + parseInt(upc.charAt(1)) + parseInt(upc.charAt(3)) + parseInt(upc.charAt(5)) + parseInt(upc.charAt(7)) + parseInt(upc.charAt(9));
        if ((add + 0)%10 == 0) last = "0";
        if ((add + 1)%10 == 0) last = "1";
        if ((add + 2)%10 == 0) last = "2";
        if ((add + 3)%10 == 0) last = "3";
        if ((add + 4)%10 == 0) last = "4";
        if ((add + 5)%10 == 0) last = "5";
        if ((add + 6)%10 == 0) last = "6";
        if ((add + 7)%10 == 0) last = "7";
        if ((add + 8)%10 == 0) last = "8";
        if ((add + 9)%10 == 0) last = "9";
        return upc + last
    }
  }]);