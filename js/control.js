  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   // $('.modal-trigger').leanModal();
    
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy',
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdaysFull: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    weekdaysShort: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    today: 'Hoy',
  	clear: 'Limpiar',
  	close: 'Cerrar',
    closeOnSelect: true,
  	labelMonthNext: 'Proximo Mes',
  	labelMonthPrev: 'Mes Anterior',
  	labelMonthSelect: 'Seleccionar un Mes',
  	labelYearSelect: 'Seleccionar un Año',
    min: [1900,00,01],
    max: true});

    $(".button-collapse").sideNav();

  });