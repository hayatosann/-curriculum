let mojiretu2 = "Goodmorning";
    console.log(mojiretu2.length);

    function Hello() {
      let greeting = "Hello world";
      console.log(greeting);
    }

      Hello();

      function introduce(name, age) {
        
        console.log(name + 'さんの年齢は' + age + 'です！');
    
    }
    
    //引数に値を渡す
    introduce('笹野', 28);
    introduce('ササの', 30);

    function multiplication( num1, num2 ) {
      return num1 * num2;
  
    }
    console.log( multiplication( 9, 9 ) );


    function multiplication( num1, num2 ) {
      return num1 * num2;
    }

   

  if( multiplication( 9, 9 ) > 80) {
    console.log( '5よりも大きい' );
    }
    else {
    console.log( '5よりも小さい');
    }