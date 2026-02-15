(function () {
    //string
    var nombre = 'maria magdalena';
    console.log(nombre);
    //
    var edad = 46;
    console.log(edad + nombre);
    //Boolean
    var isWorking = false;
    console.log(isWorking);
    //object
    var animal = {
        name: "gato",
        age: 5,
        isWorking: false
    };
    console.log(animal);
    //funciones 
    function add(a, b) {
        return a + b;
    }
    var res = add(5, 10);
    console.log(res);
    function calName(persona) {
        return "mi nombre es ".concat(persona);
    }
    var dd = calName("Mari");
    console.log(dd);
})();
