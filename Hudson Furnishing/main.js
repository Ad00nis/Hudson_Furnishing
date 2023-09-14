let app = angular.module('app', ['ngRoute']);

app.config(($routeProvider)=>{
    $routeProvider
    .when('/', {
        templateUrl: "sections/home.html"
    })
    .when('/gallery', {
        templateUrl: "sections/gallery.html"
    })
    .when('/faq', {
        templateUrl: "sections/faq.html"
    })
    .when('/about-us', {
        templateUrl: "sections/aboutus.html"
    })
    .when('/contact', {
        templateUrl: "sections/contact.html"
    })

    // products re-direction routing
    .when('/bedroom', {
        templateUrl: "sections/products/bedroom.html"
    })
    .when('/livingroom', {
        templateUrl: "sections/products/livingroom.html"
    })
    .when('/dinningroom', {
        templateUrl: "sections/products/dinningroom.html"
    })
    .when('/outdoor', {
        templateUrl: "sections/products/outdoor.html"
    })
    .when('/homeoffice', {
        templateUrl: "sections/products/homeoffice.html"
    })
    .when('/cart', {
        templateUrl: "sections/products/cart.html"
    })
});

let cart = [];

app.controller('ctrl', ($rootScope, $scope, $http)=>{  

    $scope.products = "";

    $http.get('data/product.json')
    .then((res)=>{

        if(res.data){
            $scope.products = res.data;
            setTimeout(()=>{
                document.querySelector('.loader').classList.add('blur');
                setTimeout(()=>{
                    document.querySelector('.loader').style.display = 'none';
                }, 100);
            }, 500);
        }
        else{
            console.log($scope.products);
        }

        // filter by price
        $scope.lessthan500 = () => {$scope.products = res.data.filter(b => (b.price < 150000));}
        $scope.lessthan2000 = () => {$scope.products = res.data.filter(b => (b.price > 150000 && b.price <= 200000  ))}
        $scope.lessthan5000 = () => {$scope.products = res.data.filter(b => (b.price > 200000 && b.price <= 500000));}
        // // filter by marerial
        $scope.wood = () => {$scope.products = res.data.filter(b => b.material === 'wood')};
        $scope.metal = () => {$scope.products = res.data.filter(b => b.material === 'metal')};
        $scope.polyester = () => {$scope.products = res.data.filter(b => b.material === 'polyester')};
        // // filter by brand
        $scope.cooper = () => {$scope.products = res.data.filter(b => b.brand === 'cooper groove')};
        $scope.america = () => {$scope.products = res.data.filter(b => b.brand === 'Furniture of America')};
        $scope.porch = () => {$scope.products = res.data.filter(b => b.brand === 'Porch & Den')};  
        
    });

    // home office json data
    $http.get('data/homeoffice.json')
    .then((res)=>{

        if(res.data){
            $scope.officeproducts = res.data;
            setTimeout(()=>{
                document.querySelector('.loader').classList.add('blur');
                setTimeout(()=>{
                    document.querySelector('.loader').style.display = 'none';
                }, 100);
            }, 500);
        }
        else{
            console.log($scope.officeproducts);
        }

        // filter by price
        $scope.lessthan500 = () => {$scope.officeproducts = res.data.filter(b => (b.price < 150000));}
        $scope.lessthan2000 = () => {$scope.officeproducts = res.data.filter(b => (b.price > 150000 && b.price <= 200000  ))}
        $scope.lessthan5000 = () => {$scope.officeproducts = res.data.filter(b => (b.price > 200000 && b.price <= 500000));}
        // // filter by marerial
        $scope.wood = () => {$scope.officeproducts = res.data.filter(b => b.material === 'wood')};
        $scope.metal = () => {$scope.officeproducts = res.data.filter(b => b.material === 'metal')};
        $scope.polyester = () => {$scope.officeproducts = res.data.filter(b => b.material === 'polyester')};
        // // filter by brand
        $scope.cooper = () => {$scope.officeproducts = res.data.filter(b => b.brand === 'cooper groove')};
        $scope.america = () => {$scope.officeproducts = res.data.filter(b => b.brand === 'Furniture of America')};
        $scope.porch = () => {$scope.officeproducts = res.data.filter(b => b.brand === 'Porch & Den')};  
        
    });

    // Outdoor json data
    $http.get('data/outdoors.json')
    .then((res)=>{

        if(res.data){
            $scope.outdoorproducts = res.data;
            setTimeout(()=>{
                document.querySelector('.loader').classList.add('blur');
                setTimeout(()=>{
                    document.querySelector('.loader').style.display = 'none';
                }, 100);
            }, 500);
        }
        else{
            console.log($scope.outdoorproducts);
        }

        // filter by price
        $scope.lessthan500 = () => {$scope.outdoorproducts = res.data.filter(b => (b.price < 150000));}
        $scope.lessthan2000 = () => {$scope.outdoorproducts = res.data.filter(b => (b.price > 150000 && b.price <= 200000  ))}
        $scope.lessthan5000 = () => {$scope.outdoorproducts = res.data.filter(b => (b.price > 200000 && b.price <= 500000));}
        // // filter by marerial
        $scope.wood = () => {$scope.outdoorproducts = res.data.filter(b => b.material === 'wood')};
        $scope.metal = () => {$scope.outdoorproducts = res.data.filter(b => b.material === 'metal')};
        $scope.polyester = () => {$scope.outdoorproducts = res.data.filter(b => b.material === 'polyester')};
        // // filter by brand
        $scope.cooper = () => {$scope.outdoorproducts = res.data.filter(b => b.brand === 'cooper groove')};
        $scope.america = () => {$scope.outdoorproducts = res.data.filter(b => b.brand === 'Furniture of America')};
        $scope.porch = () => {$scope.outdoorproducts = res.data.filter(b => b.brand === 'Porch & Den')};  
        
    });
    // home Dinning Room json data
    $http.get('data/dinningroom.json')
    .then((res)=>{

        if(res.data){
            $scope.dinningproducts = res.data;
            setTimeout(()=>{
                document.querySelector('.loader').classList.add('blur');
                setTimeout(()=>{
                    document.querySelector('.loader').style.display = 'none';
                }, 100);
            }, 500);
        }
        else{
            console.log($scope.dinningproducts);
        }

        // filter by price
        $scope.lessthan500 = () => {$scope.dinningproducts = res.data.filter(b => (b.price < 150000));}
        $scope.lessthan2000 = () => {$scope.dinningproducts = res.data.filter(b => (b.price > 150000 && b.price <= 200000  ))}
        $scope.lessthan5000 = () => {$scope.dinningproducts = res.data.filter(b => (b.price > 200000 && b.price <= 500000));}
        // // filter by marerial
        $scope.wood = () => {$scope.dinningproducts = res.data.filter(b => b.material === 'wood')};
        $scope.metal = () => {$scope.dinningproducts = res.data.filter(b => b.material === 'metal')};
        $scope.polyester = () => {$scope.dinningproducts = res.data.filter(b => b.material === 'polyester')};
        // // filter by brand
        $scope.cooper = () => {$scope.dinningproducts = res.data.filter(b => b.brand === 'cooper groove')};
        $scope.america = () => {$scope.dinningproducts = res.data.filter(b => b.brand === 'Furniture of America')};
        $scope.porch = () => {$scope.dinningproducts = res.data.filter(b => b.brand === 'Porch & Den')};  
        
    });

    // home Living Room json data
    $http.get('data/livingroom.json')
    .then((res)=>{

        if(res.data){
            $scope.livingproducts = res.data;
            setTimeout(()=>{
                document.querySelector('.loader').classList.add('blur');
                setTimeout(()=>{
                    document.querySelector('.loader').style.display = 'none';
                }, 100);
            }, 500);
        }
        else{
            console.log($scope.livingproducts);
        }

        // filter by price
        $scope.lessthan500 = () => {$scope.livingproducts = res.data.filter(b => (b.price < 150000));}
        $scope.lessthan2000 = () => {$scope.livingproducts = res.data.filter(b => (b.price > 150000 && b.price <= 200000  ))}
        $scope.lessthan5000 = () => {$scope.livingproducts = res.data.filter(b => (b.price > 200000 && b.price <= 500000));}
        // // filter by marerial
        $scope.wood = () => {$scope.livingproducts = res.data.filter(b => b.material === 'wood')};
        $scope.metal = () => {$scope.livingproducts = res.data.filter(b => b.material === 'metal')};
        $scope.polyester = () => {$scope.livingproducts = res.data.filter(b => b.material === 'polyester')};
        // // filter by brand
        $scope.cooper = () => {$scope.livingproducts = res.data.filter(b => b.brand === 'cooper groove')};
        $scope.america = () => {$scope.livingproducts = res.data.filter(b => b.brand === 'Furniture of America')};
        $scope.porch = () => {$scope.livingproducts = res.data.filter(b => b.brand === 'Porch & Den')};  
        
    });

    // $scope.$emit('LOAD');

    $scope.myId = [1,2,3,4,5,6];


    // pop up
    
    $scope.pop = (x)=>{
        document.querySelector('.blur-bg').classList.remove('hidden-blur');
        document.querySelector('.modal-content-container').classList.remove('hidden-blur');
        document.querySelectorAll('.modal-content')[x].classList.remove('hidden-blur');

        document.querySelectorAll('.dot-container ')[0].children[0].classList.add('active')
            
        
    }
    $scope.close = (x)=>{
        document.querySelectorAll('.modal-content')[x].classList.add('hidden-blur');
        document.querySelector('.modal-content-container').classList.add('hidden-blur');
        document.querySelector('.blur-bg').classList.add('hidden-blur');

    }

    // pop up images prev and next buttons

    $scope.prev = (x) => {
        const slidesContainer = document.querySelectorAll(".img-container");
        const slide = slidesContainer[x].children[x];
        const slideWidth = slide.clientWidth;
        slidesContainer[x].scrollLeft -= slideWidth;
    }
    $scope.next = (x) => {
        const slidesContainer = document.querySelectorAll(".img-container");
        const slide = slidesContainer[x].children[x];
        const slideWidth = slide.clientWidth;
        slidesContainer[x].scrollLeft += slideWidth;
    }


    $scope.add = (x) => {        
        let item = ($scope.products)[x];
        item.id = x;
        item.quantity = 1;
        item.total = item.price*item.quantity;
        if(!cart.includes(item)){
            cart.push(item);
        }
    } 

});

app.controller('filterCtrl', ($scope)=>{
    let clickBtn = document.querySelectorAll('.filter-section p button');
    for(let i = 0; i<clickBtn.length; i++){
        clickBtn[i].addEventListener('click', ()=>{
            let btnHtml = clickBtn[i].innerHTML;
            if(btnHtml === "+"){
                document.querySelectorAll('.filter-section p button')[i].innerHTML = '-';
            }
            else{
                document.querySelectorAll('.filter-section p button')[i].innerHTML = "+";
            }
            document.querySelectorAll('.filter-section ul')[i].classList.toggle('display-none')
            document.querySelectorAll('.filter-section ul')[i].classList.toggle('flex-column')
        })
    }
})

app.controller('appController', ($scope)=>{
    $scope.$on('LOAD', ()=>{
        $scope.loading=true
    });
    $scope.$on('UNLOAD', ()=>{
        $scope.loading=false
    })
});

app.controller("cartCtrl", ($scope)=>{
    $scope.carts = cart;
    $scope.quantity = 1;
    
    
    $scope.deleteItem=(x)=>{
        cart.splice(x, 1)
        $scope.cart = cart;
    }
    $scope.increament=(x)=>{
        cart[x].quantity = cart[x].quantity + 1;
        cart[x].total = cart[x].price*cart[x].quantity;
    }
    $scope.decreament=(x)=>{
        cart[x].quantity = cart[x].quantity <= 1 ? 1 : cart[x].quantity  - 1;
        cart[x].total = cart[x].price*cart[x].quantity;
    }

})






