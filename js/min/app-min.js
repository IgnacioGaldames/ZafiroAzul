function cargarTexto(){var o=(new Date).getTime();o>ultimoClick+1?(clicks+=1,document.getElementById("texto").innerHTML=mensaje(),document.getElementById("texto_secundario").innerHTML=textoSecundario()):alert(alerta()),ultimoClick=o}$(document).foundation(),(new WOW).init();var turnoJugador=["yo","izquierda","derecha","viejo","joven","alto","bajo","todos","hombres","mujeres","solteros","en pareja","par","impar","risa"],numeroAccionJugador=[1,2],numeroDuracionAccionJugador=[1,2,3,4,5],duracionAccion=["turno","siempre"],decisionJugador=["elegir","elejido"],complemento_accionJugador=["tomar","regalar"],ejemplosTomar=["(Levante el vaso y beba su contenido)","Simplemente toma","Voh, dale","1,2,3: TOMA","Alzad vuestra copa y bebed","Siganme los buenos","Al abordaje, mis muchanchos","Si alguien lee esto, por favor envíe ayuda","01110100 01101111 01101101 01100001","Jesús convertiría el agua en vino si estuviera en tu lugar","Yo sé cosas y bebo. Pero la mayoría del tiempo solo sé que bebo."],ejemplosLimon=["limón","paralepipedo","ramero","paragua","melón"],ejemplosNunca=["visto cierta película","visto cierta serie","hecho cierto acto sexual","leído cierto libro","visitado cierto lugar","cometido algún error vergonzozo"],ejemplosCultura=["Marcas de autos japonenes","Colores primarios","Números entre el 1 y el 5","Nombres de animales"],ejemplosReglas=["Evitar que alguien haga algo","Invitar a que alguien haga algo"],baseAccionJugador=["nunca","limon","dedo","chancho","aob","qlh","vom","cultura","cascada","historia","regla"],baseAccionJugadores=["beso"],clicks=0,ultimoClick=0,tituloFontAwesome=["<i class='fa fa-beer'></i>"],alerta=function o(){var o=numeroDuracionAccionJugador[Math.floor(Math.random()*numeroDuracionAccionJugador.length)];return o>1?pluralNumeroAlerta=["s"]:pluralNumeroAlerta=[" "],["No te saltes turnos! Juega antes de volver a apretar el botón. Debes Tomar "+o+" Trago"+pluralNumeroAlerta]},mensaje=function a(){var o=turnoJugador[Math.floor(Math.random()*turnoJugador.length)],a=turnoJugador[Math.floor(Math.random()*turnoJugador.length)];if("todos"===o&&5>=clicks||"hombres"===o&&5>=clicks||"mujeres"===o&&5>=clicks||"solteros"===o&&5>=clicks||"en pareja"===o&&5>=clicks||"par"===o&&5>=clicks||"impar"===o&&5>=clicks)var e=baseAccionJugadores;else if(o&&5>=clicks)var e=baseAccionJugador;else if("todos"===o&&clicks>5&&10>=clicks||"hombres"===o&&clicks>5&&10>=clicks||"mujeres"===o&&clicks>5&&10>=clicks||"solteros"===o&&clicks>5&&10>=clicks||"en pareja"===o&&clicks>5&&10>=clicks||"par"===o&&clicks>5&&10>=clicks||"impar"===o&&clicks>5&&10>=clicks)var e=baseAccionJugadores.concat("compañero");else if(o&&clicks>5&&10>=clicks)var e=baseAccionJugador.concat("compañero");else if("todos"===o&&clicks>10&&15>=clicks||"hombres"===o&&clicks>10&&15>=clicks||"mujeres"===o&&clicks>10&&15>=clicks||"solteros"===o&&clicks>10&&15>=clicks||"en pareja"===o&&clicks>10&&15>=clicks||"par"===o&&clicks>10&&15>=clicks||"impar"===o&&clicks>10&&15>=clicks)var e=baseAccionJugadores.concat("compañero","shot");else if(o&&clicks>10&&15>=clicks)var e=baseAccionJugador.concat("compañero","shot");else if("todos"===o&&clicks>15&&20>=clicks||"hombres"===o&&clicks>15&&20>=clicks||"mujeres"===o&&clicks>15&&20>=clicks||"solteros"===o&&clicks>15&&20>=clicks||"en pareja"===o&&clicks>15&&20>=clicks||"par"===o&&clicks>15&&20>=clicks||"impar"===o&&clicks>15&&20>=clicks)var e=baseAccionJugadores.concat("compañero","shot","piquito");else if(o&&clicks>15&&20>=clicks)var e=baseAccionJugador.concat("compañero","shot","piquito");else if("todos"===o&&clicks>20&&25>=clicks||"hombres"===o&&clicks>20&&25>=clicks||"mujeres"===o&&clicks>20&&25>=clicks||"solteros"===o&&clicks>20&&25>=clicks||"en pareja"===o&&clicks>20&&25>=clicks||"par"===o&&clicks>20&&25>=clicks||"impar"===o&&clicks>20&&25>=clicks)var e=baseAccionJugadores.concat("compañero","shot","piquito","beso");else if(o&&clicks>20&&25>=clicks)var e=baseAccionJugador.concat("compañero","shot","piquito","beso");else if("todos"===o&&clicks>25&&30>=clicks||"hombres"===o&&clicks>25&&30>=clicks||"mujeres"===o&&clicks>25&&30>=clicks||"solteros"===o&&clicks>25&&30>=clicks||"en pareja"===o&&clicks>25&&30>=clicks||"par"===o&&clicks>25&&30>=clicks||"impar"===o&&clicks>25&&30>=clicks)var e=baseAccionJugadores.concat("compañero","shot","piquito","beso","prenda");else if(o&&clicks>25&&30>=clicks)var e=baseAccionJugador.concat("compañero","shot","piquito","beso","prenda");else if("todos"===o&&clicks>30||"hombres"===o&&clicks>30||"mujeres"===o&&clicks>30||"solteros"===o&&clicks>30||"en pareja"===o&&clicks>30||"par"===o&&clicks>30||"impar"===o&&clicks>30)var e=baseAccionJugadores.concat("compañero","shot","piquito","beso","prenda","penitencia");else if(o&&clicks>30)var e=baseAccionJugador.concat("compañero","shot","piquito","beso","prenda","penitencia");var c=e[Math.floor(Math.random()*e.length)],r=numeroAccionJugador[Math.floor(Math.random()*numeroAccionJugador.length)],i=numeroDuracionAccionJugador[Math.floor(Math.random()*numeroDuracionAccionJugador.length)],n=duracionAccion[Math.floor(Math.random()*duracionAccion.length)],l=decisionJugador[Math.floor(Math.random()*decisionJugador.length)],s=complemento_accionJugador[Math.floor(Math.random()*complemento_accionJugador.length)],t=ejemplosTomar[Math.floor(Math.random()*ejemplosTomar.length)],u=ejemplosLimon[Math.floor(Math.random()*ejemplosLimon.length)],d=ejemplosNunca[Math.floor(Math.random()*ejemplosNunca.length)],m=ejemplosCultura[Math.floor(Math.random()*ejemplosCultura.length)],g=ejemplosReglas[Math.floor(Math.random()*ejemplosReglas.length)];i>1?pluralDuracionAcciones=["s"]:pluralDuracionAcciones=[" "],r>1?pluralNumeroAcciones=["s"]:pluralNumeroAcciones=[" "],"turno"===n?textoValorDuracionAccion=["durante "+i+" turno"+pluralDuracionAcciones]:"siempre"===n&&(textoValorDuracionAccion=["por siempre jamás"]),"todos"===o||"hombres"===o||"mujeres"===o||"solteros"===o||"en pareja"===o?pluralJugadores=["s "]:pluralJugadores=[" "];var p=[" "+o+" le"+pluralJugadores+" toca"],J=[s+" "+r+" "+c+pluralNumeroAcciones];"yo"===a?texto_ComplementoTurnoJugador=["a mi"]:"izquierda"===a||"derecha"===a?texto_ComplementoTurnoJugador=["al de su"+a]:"todos"===a?texto_ComplementoTurnoJugador=["a quién quiera"]:"hombres"===a||"solteros"===a||"en pareja"===a?texto_ComplementoTurnoJugador=["a los "+a]:"mujeres"===a?texto_ComplementoTurnoJugador=["a las "+a]:"viejo"===a||"joven"===a||"alto"===a||"bajo"===a?texto_ComplementoTurnoJugador=["al más "+a]:"par"===a||"impar"===a?texto_ComplementoTurnoJugador=["a los nacidos en un año "+a]:"risa"===a?texto_ComplementoTurnoJugador=["al que se ría primero"]:a&&(texto_ComplementoTurnoJugador=["Valor Turno jugador not found"]);var h=["dar un "+c+" "+texto_ComplementoTurnoJugador];"nunca"===c?textoAccionJugador=["decir nunca nunca"]:"limon"===c?textoAccionJugador=["decir un "+u+" medio "+u]:"dedo"===c?textoAccionJugador=["poner un dedo sobre la mesa"]:"chancho"===c?textoAccionJugador=["inflar los pómulos"]:"aob"===c?textoAccionJugador=["dar dos opciones a elegir"]:"qlh"===c?textoAccionJugador=["inventar un escenario y que el resto apunte a quién lo haría o lo diría"]:"vom"===c?textoAccionJugador=["decir una verdad o una mentira"]:"cultura"===c?textoAccionJugador=["empezar un tema para jugar al bachillerato"]:"cascada"===c?textoAccionJugador=["iniciar la cascada"]:"historia"===c?textoAccionJugador=["empezar una historia"]:"regla"===c?textoAccionJugador=["crear una regla"]:"beso"===c||"piquito"===c?textoAccionJugador=[h]:"compañero"===c?textoAccionJugador=["elegir a alguien para que sufra el mismo destino "+textoValorDuracionAccion]:"trago"===c||"shot"===c?textoAccionJugador=[J]:"prenda"===c?textoAccionJugador=["quitarse una prenda"]:"penitencia"===c&&(textoAccionJugador=["cumplir una penitencia"]),"nunca"===c?textoEjemploAccionJugador=["Yo nunca nunca he "+d]:"limon"===c?textoEjemploAccionJugador=["Todos se enumeran. El primero debe decir un "+u+" medio "+u+" "+i+" "+u+pluralDuracionAcciones+" medio "+u]:"dedo"===c?textoEjemploAccionJugador=["El último en poner el dedo sobre la mesa, toma"]:"chancho"===c?textoEjemploAccionJugador=["El último en inflar los pómulos, toma"]:"aob"===c?textoEjemploAccionJugador=["Todos eligen entre a y b y los que saquen menos votos, toman"]:"qlh"===c?textoEjemploAccionJugador=["(Quién saque más votos, toma)"]:"vom"===c?textoEjemploAccionJugador=["(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)"]:"cultura"===c?textoEjemploAccionJugador=["Como por ejemplo: "+m]:"cascada"===c?textoEjemploAccionJugador=["(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)"]:"historia"===c?textoEjemploAccionJugador=["(Dice un palabra y el resto la repite, añadiendo su propia palabra)"]:"regla"===c?textoEjemploAccionJugador=["Como por ejemplo: "+g]:"piquito"===c?textoEjemploAccionJugador=["(dar un pequeño beso en los labios)"]:"beso"===c?textoEjemploAccionJugador=["(dar un beso de verdad, como los que dan en Francia.)"]:"compañero"===c?textoEjemploAccionJugador=["(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)"]:"trago"===c?textoEjemploAccionJugador=[t]:"shot"===c?textoEjemploAccionJugador=["(Un trago fuerte, al seco. Como un disparo)"]:"prenda"===c?textoEjemploAccionJugador=["(Quitar o quitarse alguna ropa)"]:"penitencia"===c&&(textoEjemploAccionJugador=["(hacer lo que le pidan que haga)"]),"yo"===o?texto_turnoJugador=["A mi me toca"]:"izquierda"===o||"derecha"===o?texto_turnoJugador=["Al de mi"+p]:"todos"===o?texto_turnoJugador=["A"+p]:"hombres"===o||"solteros"===o||"en pareja"===o?texto_turnoJugador=["A los"+p]:"mujeres"===o?texto_turnoJugador=["A las"+p]:"viejo"===o||"joven"===o||"alto"===o||"bajo"===o?texto_turnoJugador=["Al más"+p]:"par"===o||"impar"===o?texto_turnoJugador=["A los nacidos en un año "+o+" les toca"]:"risa"===o?texto_turnoJugador=["Al que se ría primero le toca"]:o&&(texto_turnoJugador=["Valor Turno jugador not found"]),"trago"===c?icono_accionJugador=["beer"]:"nunca"===c?icono_accionJugador=["beer"]:"limon"===c?icono_accionJugador=["lemon-o"]:"dedo"===c?icono_accionJugador=["hand-o-down"]:"chancho"===c?icono_accionJugador=["hand-o-down"]:"aob"===c?icono_accionJugador=["fa-adjust"]:"regla"===c?icono_accionJugador=["gavel"]:"qlh"===c?icono_accionJugador=["balance-scale"]:"vom"===c?icono_accionJugador=["bullhorn"]:"cultura"===c?icono_accionJugador=["comments"]:"shot"===c?icono_accionJugador=["glass"]:"cascada"===c?icono_accionJugador=["users"]:"historia"===c?icono_accionJugador=["book"]:"piquito"===c?icono_accionJugador=["heart-o"]:"beso"===c?icono_accionJugador=["heart"]:"prenda"===c?icono_accionJugador=["shopping-bag"]:"penitencia"===c?icono_accionJugador=["exclamation-circle"]:c&&(icono_accionJugador=["beer"]),console.log(e),console.log(c),console.log(o),console.log(clicks),fontAwesome=["<i class='fa fa-"+icono_accionJugador+"'></i>"];var k=["<h1  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='1s'>"];return[k+fontAwesome+"<br> "+texto_turnoJugador+" "+textoAccionJugador+"</h1><br>"];valorAlert=i},textoSecundario=function e(){var o=["<h3  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='2s'>"];return[o+textoEjemploAccionJugador+"</h3>"]};