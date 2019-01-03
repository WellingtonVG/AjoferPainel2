$(function () {
  
  $("#datepicker").datepicker({
        autoclose: true, 
        todayHighlight: true,
        format: "mm-yyyy",
        viewMode: "months", 
        minViewMode: "months",
        language: 'pt-BR',
        startDate:'01/2018',
        endDate:'0m',      
  });
  $("#datepicker2").datepicker({
    autoclose: true, 
    todayHighlight: true,
    format: "mm-yyyy",
    viewMode: "months", 
    minViewMode: "months",
    language: 'pt-BR',
    startDate:'01/2018',
    endDate:'0m',      
});

});
