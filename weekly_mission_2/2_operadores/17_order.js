function curlis(input) {
    if (input.includes(0)){   
        let modify = input.split("");         // Convertir string y convertirlo en Array
        modify.sort((a, b) => b - a);       // Ordenar la lista de mayor a menor
        let str = new String(modify)      // Convertir Array nuevamente en String
        output = str.replace(/,/g, "");    // Eliminar las comas que dejó la lista
        console.log(output);                 // Retorna el numero ya ordenado, se ingresó 1010101 y regresa 1111000
       }else{
        process.stdout.write(input);
      }
  }
  
  curlis("101010101");
  