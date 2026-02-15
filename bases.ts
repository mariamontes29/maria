(()=>{

    //string

    const nombre:string = 'maria magdalena';
    console.log(nombre);
    //
    let edad: number = 46;
    console.log(edad + nombre);
    //Boolean
    const isWorking:boolean = false;
    console.log(isWorking);
    //object
    const animal:object = {
        name:"gato",
        age:5,
        isWorking:false
    }

    console.log(animal);

    //funciones 
    function add(a:number, b:number):number {
    return a+b;
    }
    const res = add (5,10);
    console.log (res);
    function calName(persona:string):string{
        return `mi nombre es ${persona}`
    }

    const dd  =  calName("Mari");
    console.log(dd)
})();

