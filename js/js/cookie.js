if (!document.cookie){
    setCookie("cookie", "1", 365);
    document.write("<font face='times New Roman' size='1'>Suas Visitas : 1</font>");
    } else {
    var cont = document.cookie;
    var dividindo = cont.split("=");
    //document.write(dividindo[1]);
    var numero = parseInt(dividindo[1]);
    var soma = numero + 1;
    document.write("<font face='times New Roman' size='2'>" + soma + " Visitaram esta página</font>");
    setCookie("cookie", soma, 365);
    }