function cargarTexto(){var o=(new Date).getTime();o>ultimoClick+1?(clicks+=1,document.getElementById("texto").innerHTML=mensaje(),document.getElementById("texto_secundario").innerHTML=textoSecundario()):alert(alerta()),ultimoClick=o}$(document).foundation(),(new WOW).init();var turnoJugador=["yo","izquierda","derecha","viejo","joven","alto","bajo","todos","hombres","mujeres","solteros","en pareja","par","impar","risa"],numeroAccionJugador=[1,2],numeroDuracionAccionJugador=[1,2,3,4,5],duracionAccion=["turno","siempre"],decisionJugador=["elegir","elejido"],complemento_accionJugador=["tomar","regalar"],ejemplosTomar=["(Levante el vaso y beba su contenido)","Simplemente toma","Voh, dale","1,2,3: TOMA","Alzad vuestra copa y bebed","Siganme los buenos","Al abordaje, mis muchanchos","Si alguien lee esto, por favor envíe ayuda","01110100 01101111 01101101 01100001","Jesús convertiría el agua en vino si estuviera en tu lugar","Yo sé cosas y bebo. Pero la mayoría del tiempo solo sé que bebo."],ejemplosLimon=["limón","paralepipedo","ramero","paragua","melón"],ejemplosNunca=["visto cierta película","visto cierta serie","hecho cierto acto sexual","leído cierto libro","visitado cierto lugar","cometido algún error vergonzozo"],ejemplosCultura=["Marcas de autos japonenes","Colores primarios","Números entre el 1 y el 5","Nombres de animales"],ejemplosReglas=["Evitar que alguien haga algo","Invitar a que alguien haga algo"],ejemplosPenitencia=["Adivinar quién te beso"],baseAccionJugador=["nunca","limon","dedo","chancho","aob","qlh","vom","cultura","cascada","historia","regla"],baseAccionJugadores=["trago"],accionJugadoresPiso2=["compañero"],accionJugadoresPiso3=["compañero","shot"],accionJugadoresPiso4=["compañero","shot","piquito"],accionJugadoresPiso5=["compañero","shot","piquito","beso"],accionJugadoresPiso6=["compañero","shot","piquito","beso","prenda"],accionJugadoresPiso7=["compañero","shot","piquito","beso","prenda","penitencia"],clicks=0,ultimoClick=0,tituloFontAwesome=["<i class='fa fa-beer'></i>"],multiplier=prompt("Cantidad de jugadores","1"),piso1=1*multiplier,piso2=2*multiplier,piso3=3*multiplier,piso4=4*multiplier,piso5=5*multiplier,piso6=6*multiplier,alerta=function o(){var o=numeroDuracionAccionJugador[Math.floor(Math.random()*numeroDuracionAccionJugador.length)];return o>1?pluralNumeroAlerta=["s"]:pluralNumeroAlerta=[" "],["No te saltes turnos! Juega antes de volver a apretar el botón. Debes Tomar "+o+" Trago"+pluralNumeroAlerta]},mensaje=function a(){var o=turnoJugador[Math.floor(Math.random()*turnoJugador.length)],a=turnoJugador[Math.floor(Math.random()*turnoJugador.length)];if("todos"===o&&piso1>=clicks||"hombres"===o&&piso1>=clicks||"mujeres"===o&&piso1>=clicks||"solteros"===o&&piso1>=clicks||"en pareja"===o&&piso1>=clicks||"par"===o&&piso1>=clicks||"impar"===o&&piso1>=clicks)var e=baseAccionJugadores;else if(o&&piso1>=clicks)var e=baseAccionJugador;else if("todos"===o&&clicks>piso1&&piso2>=clicks||"hombres"===o&&clicks>piso1&&piso2>=clicks||"mujeres"===o&&clicks>piso1&&piso2>=clicks||"solteros"===o&&clicks>piso1&&piso2>=clicks||"en pareja"===o&&clicks>piso1&&piso2>=clicks||"par"===o&&clicks>piso1&&piso2>=clicks||"impar"===o&&clicks>piso1&&piso2>=clicks)var e=baseAccionJugadores.concat(accionJugadoresPiso2);else if(o&&clicks>piso1&&piso2>=clicks)var e=baseAccionJugador.concat(accionJugadoresPiso2);else if("todos"===o&&clicks>piso2&&piso3>=clicks||"hombres"===o&&clicks>piso2&&piso3>=clicks||"mujeres"===o&&clicks>piso2&&piso3>=clicks||"solteros"===o&&clicks>piso2&&piso3>=clicks||"en pareja"===o&&clicks>piso2&&piso3>=clicks||"par"===o&&clicks>piso2&&piso3>=clicks||"impar"===o&&clicks>piso2&&piso3>=clicks)var e=baseAccionJugadores.concat(accionJugadoresPiso3);else if(o&&clicks>piso2&&piso3>=clicks)var e=baseAccionJugador.concat(accionJugadoresPiso3);else if("todos"===o&&clicks>piso3&&piso4>=clicks||"hombres"===o&&clicks>piso3&&piso4>=clicks||"mujeres"===o&&clicks>piso3&&piso4>=clicks||"solteros"===o&&clicks>piso3&&piso4>=clicks||"en pareja"===o&&clicks>piso3&&piso4>=clicks||"par"===o&&clicks>piso3&&piso4>=clicks||"impar"===o&&clicks>piso3&&piso4>=clicks)var e=baseAccionJugadores.concat(accionJugadoresPiso4);else if(o&&clicks>piso3&&piso4>=clicks)var e=baseAccionJugador.concat(accionJugadoresPiso4);else if("todos"===o&&clicks>piso4&&piso5>=clicks||"hombres"===o&&clicks>piso4&&piso5>=clicks||"mujeres"===o&&clicks>piso4&&piso5>=clicks||"solteros"===o&&clicks>piso4&&piso5>=clicks||"en pareja"===o&&clicks>piso4&&piso5>=clicks||"par"===o&&clicks>piso4&&piso5>=clicks||"impar"===o&&clicks>piso4&&piso5>=clicks)var e=baseAccionJugadores.concat(accionJugadoresPiso5);else if(o&&clicks>piso4&&piso5>=clicks)var e=baseAccionJugador.concat(accionJugadoresPiso5);else if("todos"===o&&clicks>piso5&&piso6>=clicks||"hombres"===o&&clicks>piso5&&piso6>=clicks||"mujeres"===o&&clicks>piso5&&piso6>=clicks||"solteros"===o&&clicks>piso5&&piso6>=clicks||"en pareja"===o&&clicks>piso5&&piso6>=clicks||"par"===o&&clicks>piso5&&piso6>=clicks||"impar"===o&&clicks>piso5&&piso6>=clicks)var e=baseAccionJugadores.concat(accionJugadoresPiso6);else if(o&&clicks>piso5&&piso6>=clicks)var e=baseAccionJugador.concat(accionJugadoresPiso6);else if("todos"===o&&clicks>piso6||"hombres"===o&&clicks>piso6||"mujeres"===o&&clicks>piso6||"solteros"===o&&clicks>piso6||"en pareja"===o&&clicks>piso6||"par"===o&&clicks>piso6||"impar"===o&&clicks>piso6)var e=baseAccionJugadores.concat(accionJugadoresPiso7);else if(o&&clicks>piso6)var e=baseAccionJugador.concat(accionJugadoresPiso7);var c=e[Math.floor(Math.random()*e.length)],i=numeroAccionJugador[Math.floor(Math.random()*numeroAccionJugador.length)],r=numeroDuracionAccionJugador[Math.floor(Math.random()*numeroDuracionAccionJugador.length)],s=duracionAccion[Math.floor(Math.random()*duracionAccion.length)],n=decisionJugador[Math.floor(Math.random()*decisionJugador.length)],l=complemento_accionJugador[Math.floor(Math.random()*complemento_accionJugador.length)],t=ejemplosTomar[Math.floor(Math.random()*ejemplosTomar.length)],u=ejemplosLimon[Math.floor(Math.random()*ejemplosLimon.length)],d=ejemplosNunca[Math.floor(Math.random()*ejemplosNunca.length)],p=ejemplosCultura[Math.floor(Math.random()*ejemplosCultura.length)],m=ejemplosReglas[Math.floor(Math.random()*ejemplosReglas.length)],g=ejemplosPenitencia[Math.floor(Math.random()*ejemplosReglas.length)];r>1?pluralDuracionAcciones=["s"]:pluralDuracionAcciones=[" "],i>1?pluralNumeroAcciones=["s"]:pluralNumeroAcciones=[" "],"turno"===s?textoValorDuracionAccion=["durante "+r+" turno"+pluralDuracionAcciones]:"siempre"===s&&(textoValorDuracionAccion=["por siempre jamás"]),"todos"===o||"hombres"===o||"mujeres"===o||"solteros"===o||"en pareja"===o?pluralJugadores=["s "]:pluralJugadores=[" "];var J=[" "+o+" le"+pluralJugadores+" toca"],h=[l+" "+i+" "+c+pluralNumeroAcciones];"yo"===a?texto_ComplementoTurnoJugador=["a mi"]:"izquierda"===a||"derecha"===a?texto_ComplementoTurnoJugador=["al de su "+a]:"todos"===a?texto_ComplementoTurnoJugador=["a quién quiera"]:"hombres"===a||"solteros"===a||"en pareja"===a?texto_ComplementoTurnoJugador=["a los "+a]:"mujeres"===a?texto_ComplementoTurnoJugador=["a las "+a]:"viejo"===a||"joven"===a||"alto"===a||"bajo"===a?texto_ComplementoTurnoJugador=["al más "+a]:"par"===a||"impar"===a?texto_ComplementoTurnoJugador=["a los nacidos en un año "+a]:"risa"===a?texto_ComplementoTurnoJugador=["al que se ría primero"]:a&&(texto_ComplementoTurnoJugador=["Valor Turno jugador not found"]);var k=["dar un "+c+" "+texto_ComplementoTurnoJugador];"nunca"===c?textoAccionJugador=["decir nunca nunca"]:"limon"===c?textoAccionJugador=["decir un "+u+" medio "+u]:"dedo"===c?textoAccionJugador=["poner un dedo sobre la mesa"]:"chancho"===c?textoAccionJugador=["inflar los pómulos"]:"aob"===c?textoAccionJugador=["dar dos opciones a elegir"]:"qlh"===c?textoAccionJugador=["inventar un escenario y que el resto apunte a quién lo haría o lo diría"]:"vom"===c?textoAccionJugador=["decir una verdad o una mentira"]:"cultura"===c?textoAccionJugador=["empezar un tema para jugar al bachillerato"]:"cascada"===c?textoAccionJugador=["iniciar la cascada"]:"historia"===c?textoAccionJugador=["empezar una historia"]:"regla"===c?textoAccionJugador=["crear una regla"]:"beso"===c||"piquito"===c?textoAccionJugador=[k]:"compañero"===c?textoAccionJugador=["elegir a alguien para que sufra el mismo destino "+textoValorDuracionAccion]:"trago"===c||"shot"===c?textoAccionJugador=[h]:"prenda"===c?textoAccionJugador=["quitarse una prenda"]:"penitencia"===c&&(textoAccionJugador=["cumplir una penitencia"]),"nunca"===c?textoEjemploAccionJugador=["Yo nunca nunca he "+d]:"limon"===c?textoEjemploAccionJugador=["Todos se enumeran. El primero debe decir un "+u+" medio "+u+" "+r+" "+u+pluralDuracionAcciones+" medio "+u]:"dedo"===c?textoEjemploAccionJugador=["El último en poner el dedo sobre la mesa, toma"]:"chancho"===c?textoEjemploAccionJugador=["El último en inflar los pómulos, toma"]:"aob"===c?textoEjemploAccionJugador=["Todos eligen entre a y b y los que saquen menos votos, toman"]:"qlh"===c?textoEjemploAccionJugador=["(Quién saque más votos, toma)"]:"vom"===c?textoEjemploAccionJugador=["(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)"]:"cultura"===c?textoEjemploAccionJugador=["Como por ejemplo: "+p]:"cascada"===c?textoEjemploAccionJugador=["(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)"]:"historia"===c?textoEjemploAccionJugador=["(Dice un palabra y el resto la repite, añadiendo su propia palabra)"]:"regla"===c?textoEjemploAccionJugador=["Como por ejemplo: "+m]:"piquito"===c?textoEjemploAccionJugador=["(dar un pequeño beso en los labios)"]:"beso"===c?textoEjemploAccionJugador=["(dar un beso de verdad, como los que dan en Francia.)"]:"compañero"===c?textoEjemploAccionJugador=["(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)"]:"trago"===c?textoEjemploAccionJugador=[t]:"shot"===c?textoEjemploAccionJugador=["(Un trago fuerte, al seco. Como un disparo)"]:"prenda"===c?textoEjemploAccionJugador=["(Quitar o quitarse alguna ropa)"]:"penitencia"===c&&(textoEjemploAccionJugador=[g]),"yo"===o?texto_turnoJugador=["A mi me toca"]:"izquierda"===o||"derecha"===o?texto_turnoJugador=["Al de mi"+J]:"todos"===o?texto_turnoJugador=["A"+J]:"hombres"===o||"solteros"===o||"en pareja"===o?texto_turnoJugador=["A los"+J]:"mujeres"===o?texto_turnoJugador=["A las"+J]:"viejo"===o||"joven"===o||"alto"===o||"bajo"===o?texto_turnoJugador=["Al más"+J]:"par"===o||"impar"===o?texto_turnoJugador=["A los nacidos en un año "+o+" les toca"]:"risa"===o?texto_turnoJugador=["Al que se ría primero le toca"]:o&&(texto_turnoJugador=["Valor Turno jugador not found"]),"trago"===c?icono_accionJugador=["beer"]:"nunca"===c?icono_accionJugador=["beer"]:"limon"===c?icono_accionJugador=["lemon-o"]:"dedo"===c?icono_accionJugador=["hand-o-down"]:"chancho"===c?icono_accionJugador=["hand-o-down"]:"aob"===c?icono_accionJugador=["fa-adjust"]:"regla"===c?icono_accionJugador=["gavel"]:"qlh"===c?icono_accionJugador=["balance-scale"]:"vom"===c?icono_accionJugador=["bullhorn"]:"cultura"===c?icono_accionJugador=["comments"]:"shot"===c?icono_accionJugador=["glass"]:"cascada"===c?icono_accionJugador=["users"]:"historia"===c?icono_accionJugador=["book"]:"piquito"===c?icono_accionJugador=["heart-o"]:"beso"===c?icono_accionJugador=["heart"]:"prenda"===c?icono_accionJugador=["shopping-bag"]:"penitencia"===c?icono_accionJugador=["exclamation-circle"]:c&&(icono_accionJugador=["beer"]),console.log(e),console.log(c),console.log(o),console.log(clicks),fontAwesome=["<i class='fa fa-"+icono_accionJugador+"'></i>"];var A=["<h1  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='0s'>"];return[A+fontAwesome+"<br> "+texto_turnoJugador+" "+textoAccionJugador+"</h1><br>"];valorAlert=r},textoSecundario=function e(){var o=["<h3  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='1s'>"];return[o+textoEjemploAccionJugador+"</h3>"]};