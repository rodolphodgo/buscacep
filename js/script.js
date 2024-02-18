function consultarCep(){
    var cep = $('#cep').val();
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data, status){
      var dadosCep = data
    
      $('#localidade').val(dadosCep.localidade)
      $('#bairro').val(dadosCep.bairro)
      $('#uf').val(dadosCep.uf)
      $('#logradouro').val(dadosCep.logradouro)
      $('#ddd').val(dadosCep.ddd)
    });
  }