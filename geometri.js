//Funcion flecha anonima

    'use strict' // verifica el codiga 
   /* let nombre = 'Diery'; // solo se puede acceder desde acá, no se puede por google(consola)
    console.log(nombre); */

    // Àrea y perimetro del cuadrado
    const valueResult = document.getElementById('result');

    const btnPerimSquare = document.querySelector('#btnPerimSquare'),
          btnAreaSquare  =  document.querySelector('#btnAreaSquare'),
          btnPerimTriangle =  document.querySelector('#btnPerimetroTriangle'),
          btnAreaTriangle =  document.querySelector('#btnAreaTriangle'),
          btnDiameCircle =  document.querySelector('#btnDiameCircle'),
          btnPerimeCircle =  document.querySelector('#btnPerimeCircle'),
          btnAreaCircle =  document.querySelector('#btnAreaCircle');

    const perimSquare = (side) => side * 4;
    const areaSquare= (side) => side * side;
    /*
    * área y perímetro de triangulo 
    * ====================================================
    */ 
    const perimTriangle = (side1, side2, base) => (side1 + side2 + base);
    const areaTriangle = (base, height) => (base * height) / 2;

    /*
    * área y perímetro del circulo
    * ====================================================
    */ 
    const diameCircle = (radio)=>radio*2;
    const perimCicle = (radio) => diameCircle(radio) * Math.PI;
    const areaCircle = (radio) => (radio * radio) * Math.PI;

    function calculaPerimetro()
    {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El perimetro del cuadrado es: ${perimSquare(value)} cm`

        valueResult.innerText = result;
    }

    function calcularAreaSquare()
    {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El área del cuadrado es: ${areaSquare(value)} cm^2`

        valueResult.innerText = result;
    }

    function calculetePerimTriangle()
    {
        let side1 = document.getElementById('inputSide1');
        let side2 = document.getElementById('inputSide2');
        let side3 = document.getElementById('inputSide3');
        side1 = Number(side1.value);
        side2 = Number(side2.value);
        side3 = Number(side3.value);
        
        const result = `El perímetro de Triangulo es: ${perimTriangle(side1, side2, side3)} cm`;
        valueResult.innerText=result;
    }

    function calculetearea()
    {
        let base = document.getElementById('inputBase');
        let height = document.getElementById('inputHeight');
        base = Number(base.value);
        height = Number(height.value);
        
        const resulto = `El área de Triangulo es: ${areaTriangle(base, height)} cm^2`;
        valueResult.innerText=resulto;
    }



    function calculateDiameCircle()
    {
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El diámetro de Circulo es: ${diameCircle(radio)} cm`;
        valueResult.innerText=result;
    }
    
    function calculatePerimCircle()
    {
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El perímetro de Circulo es: ${perimCicle(radio)} cm`;
        valueResult.innerText=result;
    }
    
    function calculateAreaCircle()
    {
        let radio = document.getElementById('inputRadio');
        radio = Number(radio.value);
        
        const result = `El área de Circulo es: ${areaCircle(radio)} cm^2`;
        valueResult.innerText=result;
    }


    // Es para que se pueda modificar desde otro sitio, solo lo que colocamos en el return
   /* return 
    {     
        cpq : calculaPerimetro          
    };*/

 //)();

