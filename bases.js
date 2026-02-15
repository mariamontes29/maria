(function () {
    function areacirculo(circulo) {
        var area = Math.PI * Math.pow(circulo.radio, 2);
        console.log(area);
    }
    areacirculo({ radio: 10 });
})();
