ar listaArray = new Array;


   function adicionaTarefa(){
                         var lista = document.getElementById('lista');
                         var boxTarefa = document.getElementById('boxTarefa'); 
                         var option = document.createElement('option');
                         var tes = boxTarefa.value;   
                                  boxTarefa.focus();
                                  if(tes.length == 0){   
                                    alert("Digite sua nova Tarefa");
                                   return;
                                   }
                           option.text = boxtarefa.value;
                          listaArray[listaArray.length] = boxtarefa.value;                  
                          lista.add(option);                    
                          alert(lista.options[lista.options.length-1].text + ' tarefa com emergência.');
                          boxTarefa.value="";
                          boxtarefa.focus();
                         }
