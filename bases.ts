(()=>{

    interface Circulo{
        radio: number;
    }
    function areacirculo(circulo:Circulo): void {
        const area = Math.PI * Math.pow(circulo.radio,2);
        console.log(area)
    }
areacirculo ({radio: 10});

})();

