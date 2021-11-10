function control(formId){

    let invalids=document.getElementById(formId).querySelectorAll(':invalid').length;
    let buttons=document.getElementById(formId).querySelector('button');
    if(invalids==0){
        buttons.removeAttribute('disabled');//belirtilen niteliği bir öğeden kaldırır
    }
    else{
         buttons.setAttribute('disabled','disabled');//belirtilen niteliği bir öğeye ekler ve ona belirtilen değeri verir.
    }

}

function message(event){
    let charCode = event.keyCode;
    if (((charCode <= 90 && charCode >= 65) || (charCode <= 122 && charCode >= 97) || charCode == 8) || charCode == 350 || charCode == 351 || charCode == 304 || charCode == 286 || charCode == 287 || charCode == 231 || charCode == 199 || charCode == 305 || charCode == 214 || charCode == 246 || charCode == 220 || charCode == 252) {
        return true;
    }
    return false;
}

function formsend(){
    for(let i=0 ; i<4; i++){
        document.getElementsByClassName('iletisim-form')[i].value="";
    }
    document.getElementById("gonder").disabled = true;
}
control('form1');
formsend();