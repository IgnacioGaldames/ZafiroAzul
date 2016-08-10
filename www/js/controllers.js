angular.module('app.controllers', [])



.controller('jugarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName


    function($scope, $stateParams) {
        // #Variables
        var turnoJugador = [
            "yo", "izquierda", "derecha", "viejo", "joven", "alto", "bajo", "todos", "hombres", "mujeres", "solteros", "en pareja", "par", "impar", "risa"
        ];
        var numeroAccionJugador = [1, 2];
        var numeroDuracionAccionJugador = [1, 2, 3, 4, 5];
        var duracionAccion = ["turno", "siempre"];
        var decisionJugador = ["elegir", "elejido"];
        var complemento_accionJugador = ["tomar", "regalar"];
        var ejemplosTomar = [
            "(Levante el vaso y beba su contenido)",
            "Simplemente toma",
            "Voh, dale",
            "1,2,3: TOMA",
            "Alzad vuestra copa y bebed",
            "Siganme los buenos",
            "Al abordaje, mis muchanchos",
            "Si alguien lee esto, por favor envíe ayuda",
            "01110100 01101111 01101101 01100001",
            "Jesús convertiría el agua en vino si estuviera en tu lugar",
            "Yo sé cosas y bebo. Pero la mayoría del tiempo solo sé que bebo."
        ];
        var ejemplosLimon = [
            "limón",
            "paralepipedo",
            "ramero",
            "paragua",
            "melón",
        ];
        var ejemplosNunca = [
            "visto cierta película",
            "visto cierta serie",
            "hecho cierto acto sexual",
            "leído cierto libro",
            "visitado cierto lugar",
            "cometido algún error vergonzozo",
        ];
        var ejemplosCultura = [
            "Marcas de autos japonenes",
            "Colores primarios",
            "Números entre el 1 y el 5",
            "Nombres de animales",
        ];
        var ejemplosReglas = [
            "Evitar que alguien haga algo",
            "Invitar a que alguien haga algo",
        ];
        var ejemplosPenitencia = [
            "Adivinar quién te beso"
        ];

        var baseAccionJugador = ["nunca", "limon", "dedo", "chancho", "aob", "qlh", "vom", "cultura", "cascada", "historia", "regla"];
        var baseAccionJugadores = ["trago"];
        var accionJugadoresPiso2 = ["compañero"];
        var accionJugadoresPiso3 = [accionJugadoresPiso2, "shot"];
        var accionJugadoresPiso4 = [accionJugadoresPiso3, "piquito"];
        var accionJugadoresPiso5 = [accionJugadoresPiso4, "beso"];
        var accionJugadoresPiso6 = [accionJugadoresPiso5, "prenda"];
        var accionJugadoresPiso7 = [accionJugadoresPiso6, "penitencia"];

        var clicks = 0;
        var ultimoClick = 0;
        var tituloFontAwesome = ["<i class='fa fa-beer'></i>"];

        var multiplier = 2;
        var piso1 = multiplier * 1;
        var piso2 = multiplier * 2;
        var piso3 = multiplier * 3;
        var piso4 = multiplier * 4;
        var piso5 = multiplier * 5;
        var piso6 = multiplier * 6;

        $scope.jugar = function jugar() {

          clicks += 1;

            // Random vars
            var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
            var complementoValorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
            // Variables PLurales
            if (valorTurnoJugador === "todos" && clicks <= piso1 ||
                valorTurnoJugador === "hombres" && clicks <= piso1 ||
                valorTurnoJugador === "mujeres" && clicks <= piso1 ||
                valorTurnoJugador === "solteros" && clicks <= piso1 ||
                valorTurnoJugador === "en pareja" && clicks <= piso1 ||
                valorTurnoJugador === "par" && clicks <= piso1 ||
                valorTurnoJugador === "impar" && clicks <= piso1) {
              var accionJugador = baseAccionJugadores;
            }
            else if (valorTurnoJugador && clicks <= piso1) {
              var accionJugador = baseAccionJugador;
            }
            else if (valorTurnoJugador === "todos" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "hombres" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "mujeres" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "solteros" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "en pareja" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "par" && clicks > piso1 && clicks <= piso2 ||
                valorTurnoJugador === "impar" && clicks > piso1 && clicks <= piso2) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso2);
            }
            else if (valorTurnoJugador && clicks > piso1 && clicks <= piso2) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso2);
            }
            else if (valorTurnoJugador === "todos" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "hombres" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "mujeres" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "solteros" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "en pareja" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "par" && clicks > piso2 && clicks <= piso3 ||
                valorTurnoJugador === "impar" && clicks > piso2 && clicks <= piso3) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso3);
            }
            else if (valorTurnoJugador && clicks > piso2 && clicks <= piso3) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso3);

            }
            else if (valorTurnoJugador === "todos" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "hombres" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "mujeres" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "solteros" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "en pareja" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "par" && clicks > piso3 && clicks <= piso4 ||
                valorTurnoJugador === "impar" && clicks > piso3 && clicks <= piso4) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso4);
            }
            else if (valorTurnoJugador && clicks > piso3 && clicks <= piso4) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso4);
            }
            else if (valorTurnoJugador === "todos" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "hombres" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "mujeres" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "solteros" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "en pareja" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "par" && clicks > piso4 && clicks <= piso5 ||
                valorTurnoJugador === "impar" && clicks > piso4 && clicks <= piso5) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso5);
            }
            else if (valorTurnoJugador && clicks > piso4 && clicks <= piso5) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso5);
            }
            else if (valorTurnoJugador === "todos" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "hombres" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "mujeres" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "solteros" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "en pareja" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "par" && clicks > piso5 && clicks <= piso6 ||
                valorTurnoJugador === "impar" && clicks > piso5 && clicks <= piso6) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso6);
            }
            else if (valorTurnoJugador && clicks > piso5 && clicks <= piso6) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso6);
            }
            else if (valorTurnoJugador === "todos" && clicks > piso6 ||
                valorTurnoJugador === "hombres" && clicks > piso6 ||
                valorTurnoJugador === "mujeres" && clicks > piso6 ||
                valorTurnoJugador === "solteros" && clicks > piso6 ||
                valorTurnoJugador === "en pareja" && clicks > piso6 ||
                valorTurnoJugador === "par" && clicks > piso6 ||
                valorTurnoJugador === "impar" && clicks > piso6) {
              var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso7);
            }
            else if (valorTurnoJugador && clicks > piso6) {
              var accionJugador = baseAccionJugador.concat(accionJugadoresPiso7);
            }

              // Random vars
            var valorAccionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
            var valorNumeroAccionJugador = numeroAccionJugador[Math.floor(Math.random() * numeroAccionJugador.length)];
            var valorNumeroDuracionAccionJugador = numeroDuracionAccionJugador[Math.floor(Math.random() * numeroDuracionAccionJugador.length)];
            var valorDuracionAccion = duracionAccion[Math.floor(Math.random() * duracionAccion.length)];

            var valorDecisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
            var valorComplementoAccionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];

            var valorEjemplosTomar = ejemplosTomar[Math.floor(Math.random() * ejemplosTomar.length)];
            var valorEjemplosLimon = ejemplosLimon[Math.floor(Math.random() * ejemplosLimon.length)];
            var valorEjemplosNunca = ejemplosNunca[Math.floor(Math.random() * ejemplosNunca.length)];
            var valorEjemplosCultura = ejemplosCultura[Math.floor(Math.random() * ejemplosCultura.length)];
            var valorEjemplosReglas = ejemplosReglas[Math.floor(Math.random() * ejemplosReglas.length)];
            var valorEjemplosPenitencia = ejemplosPenitencia[Math.floor(Math.random() * ejemplosReglas.length)];

            // plural Acciones
            if (valorNumeroDuracionAccionJugador > 1) {
              pluralDuracionAcciones = ["s"];
            } else {
              pluralDuracionAcciones = [" "];
            }
            if (valorNumeroAccionJugador > 1) {
              pluralNumeroAcciones = ["s"];
            } else {
              pluralNumeroAcciones = [" "];
            }

            // Duración de la Acción
            if (valorDuracionAccion === "turno") {
              textoValorDuracionAccion = [
                "durante" + " " + valorNumeroDuracionAccionJugador + " " + "turno" + pluralDuracionAcciones
              ];
            } else if (valorDuracionAccion === "siempre") {
              textoValorDuracionAccion = ["por siempre jamás"];
            }

            // Variables lenguage
            if (valorTurnoJugador === "todos" ||
                valorTurnoJugador === "hombres" ||
                valorTurnoJugador === "mujeres" ||
                valorTurnoJugador === "solteros" ||
                valorTurnoJugador === "en pareja") {
              pluralJugadores = ["s "];

            } else {
              pluralJugadores = [" "];
            }
            var conjugar = [" " + valorTurnoJugador + " " + "le" + pluralJugadores + " " + "toca"];
            var conjugacionesTomar = [
              valorComplementoAccionJugador + " " +
              valorNumeroAccionJugador + " " + valorAccionJugador + pluralNumeroAcciones
            ];

            //Conjugaciones besar

            if (complementoValorTurnoJugador === "yo") {
              texto_ComplementoTurnoJugador = ["a mi"];
            } else if (complementoValorTurnoJugador === "izquierda" || complementoValorTurnoJugador === "derecha") {
              texto_ComplementoTurnoJugador = ["al de su" + " " + complementoValorTurnoJugador];
            } else if (complementoValorTurnoJugador === "todos") {
              texto_ComplementoTurnoJugador = ["a quién quiera"];
            } else if (complementoValorTurnoJugador === "hombres" || complementoValorTurnoJugador === "solteros" || complementoValorTurnoJugador === "en pareja") {
              texto_ComplementoTurnoJugador = ["a los" + " " + complementoValorTurnoJugador];
            } else if (complementoValorTurnoJugador === "mujeres") {
              texto_ComplementoTurnoJugador = ["a las" +  " " + complementoValorTurnoJugador];
            } else if (complementoValorTurnoJugador === "viejo" || complementoValorTurnoJugador === "joven" || complementoValorTurnoJugador === "alto" || complementoValorTurnoJugador === "bajo") {
              texto_ComplementoTurnoJugador = ["al más" +  " " + complementoValorTurnoJugador];
            } else if (complementoValorTurnoJugador === "par" || complementoValorTurnoJugador === "impar") {
              texto_ComplementoTurnoJugador = ["a los nacidos en un año" + " " + complementoValorTurnoJugador];
            } else if (complementoValorTurnoJugador === "risa") {
              texto_ComplementoTurnoJugador = ["al que se ría primero"];
            } else if (complementoValorTurnoJugador) {
              texto_ComplementoTurnoJugador = ["Valor Turno jugador not found"];
            }

            var conjugacionesBesar = [
              "dar un" + " " + valorAccionJugador + " " + texto_ComplementoTurnoJugador
            ];

            // Oraciones acción juego

            if (valorAccionJugador === "nunca") {
              textoAccionJugador = ["decir nunca nunca"];
            } else if (valorAccionJugador === "limon") {
              textoAccionJugador = ["decir un" + " " + valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon];
            } else if (valorAccionJugador === "dedo") {
              textoAccionJugador = ["poner un dedo sobre la mesa"];
            } else if (valorAccionJugador === "chancho") {
              textoAccionJugador = ["inflar los pómulos"];
            } else if (valorAccionJugador === "aob") {
              textoAccionJugador = ["dar dos opciones a elegir"];
            } else if (valorAccionJugador === "qlh") {
              textoAccionJugador = ["inventar un escenario y que el resto apunte a quién lo haría o lo diría"];
            } else if (valorAccionJugador === "vom") {
              textoAccionJugador = ["decir una verdad o una mentira"];
            } else if (valorAccionJugador === "cultura") {
              textoAccionJugador = ["empezar un tema para jugar al bachillerato"];
            } else if (valorAccionJugador === "cascada") {
              textoAccionJugador = ["iniciar la cascada"];
            } else if (valorAccionJugador === "historia") {
              textoAccionJugador = ["empezar una historia"];
            } else if (valorAccionJugador === "regla") {
              textoAccionJugador = ["crear una regla"];
            } else if (valorAccionJugador === "beso" || valorAccionJugador === "piquito") {
              textoAccionJugador = [conjugacionesBesar];
            } else if (valorAccionJugador === "compañero") {
              textoAccionJugador = ["elegir a alguien para que sufra el mismo destino" + " " + textoValorDuracionAccion];
            } else if (valorAccionJugador === "trago" || valorAccionJugador === "shot") {
              textoAccionJugador = [conjugacionesTomar];
            } else if (valorAccionJugador === "prenda") {
              textoAccionJugador = ["quitarse una prenda"]; //A mi me toca quitarse una prenda
            } else if (valorAccionJugador === "penitencia") {
              textoAccionJugador = ["cumplir una penitencia"];
            }

            // Ejemplos acción juego
            if (valorAccionJugador === "nunca") {
              textoEjemploAccionJugador =
                "Yo nunca nunca he" + " " + valorEjemplosNunca;
            } else if (valorAccionJugador === "limon") {
              textoEjemploAccionJugador =
                "Todos se enumeran. El primero debe decir un" + " " +
                 valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon + " " +
                 valorNumeroDuracionAccionJugador + " " + valorEjemplosLimon + pluralDuracionAcciones + " " + "medio" + " " + valorEjemplosLimon;
            } else if (valorAccionJugador === "dedo") {
              textoEjemploAccionJugador = "El último en poner el dedo sobre la mesa, toma";
            } else if (valorAccionJugador === "chancho") {
              textoEjemploAccionJugador = "El último en inflar los pómulos, toma";
            } else if (valorAccionJugador === "aob") {
              textoEjemploAccionJugador = "Todos eligen entre a y b y los que saquen menos votos, toman";
            } else if (valorAccionJugador === "qlh") {
              textoEjemploAccionJugador = "(Quién saque más votos, toma)";
            } else if (valorAccionJugador === "vom") {
              textoEjemploAccionJugador = "(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)";
            } else if (valorAccionJugador === "cultura") {
              textoEjemploAccionJugador =
                "Como por ejemplo:" + " " + valorEjemplosCultura
              ;
            } else if (valorAccionJugador === "cascada") {
              textoEjemploAccionJugador = "(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)";
            } else if (valorAccionJugador === "historia") {
              textoEjemploAccionJugador = "(Dice un palabra y el resto la repite, añadiendo su propia palabra)";
            } else if (valorAccionJugador === "regla") {
              textoEjemploAccionJugador = "Como por ejemplo:" + " " + valorEjemplosReglas;
            } else if (valorAccionJugador === "piquito") {
              textoEjemploAccionJugador = "(dar un pequeño beso en los labios)";
            } else if (valorAccionJugador === "beso") {
              textoEjemploAccionJugador = "(dar un beso de verdad, como los que dan en Francia.)";
            } else if (valorAccionJugador === "compañero") {
              textoEjemploAccionJugador = "(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)";
            } else if (valorAccionJugador === "trago") {
              textoEjemploAccionJugador = valorEjemplosTomar;
            } else if (valorAccionJugador === "shot") {
              textoEjemploAccionJugador = "(Un trago fuerte, al seco. Como un disparo)";
            } else if (valorAccionJugador === "prenda") {
              textoEjemploAccionJugador = "(Quitar o quitarse alguna ropa)";
            } else if (valorAccionJugador === "penitencia") {
              textoEjemploAccionJugador = valorEjemplosPenitencia;
            }

            // Variables turno jugador
            if (valorTurnoJugador === "yo") {
              texto_turnoJugador = ["A mi me toca"];
            } else if (valorTurnoJugador === "izquierda" || valorTurnoJugador === "derecha") {
              texto_turnoJugador = ["Al de mi" + conjugar];
            } else if (valorTurnoJugador === "todos") {
              texto_turnoJugador = ["A" + conjugar];
            } else if (valorTurnoJugador === "hombres" || valorTurnoJugador === "solteros" || valorTurnoJugador === "en pareja") {
              texto_turnoJugador = ["A los" + conjugar];
            } else if (valorTurnoJugador === "mujeres") {
              texto_turnoJugador = ["A las" + conjugar];
            } else if (valorTurnoJugador === "viejo" || valorTurnoJugador === "joven" || valorTurnoJugador === "alto" || valorTurnoJugador === "bajo") {
              texto_turnoJugador = ["Al más" + conjugar];
            } else if (valorTurnoJugador === "par" || valorTurnoJugador === "impar") {
              texto_turnoJugador = ["A los nacidos en un año" + " " + valorTurnoJugador + " " + "les toca"];
            } else if (valorTurnoJugador === "risa") {
              texto_turnoJugador = ["Al que se ría primero le toca"];
            } else if (valorTurnoJugador) {
              texto_turnoJugador = ["Valor Turno jugador not found"];
            }

            // Iconos acción juego
            if (valorAccionJugador === "trago") {
              icono_accionJugador = ["beer"];
            } else if (valorAccionJugador === "nunca") {
              icono_accionJugador = ["beer"];
            } else if (valorAccionJugador === "limon") {
              icono_accionJugador = ["lemon-o"];
            } else if (valorAccionJugador === "dedo") {
              icono_accionJugador = ["hand-o-down"];
            } else if (valorAccionJugador === "chancho") {
              icono_accionJugador = ["hand-o-down"];
            } else if (valorAccionJugador === "aob") {
              icono_accionJugador = ["fa-adjust"];
            } else if (valorAccionJugador === "regla") {
              icono_accionJugador = ["gavel"];
            } else if (valorAccionJugador === "qlh") {
              icono_accionJugador = ["balance-scale"];
            } else if (valorAccionJugador === "vom") {
              icono_accionJugador = ["bullhorn"];
            } else if (valorAccionJugador === "cultura") {
              icono_accionJugador = ["comments"];
            } else if (valorAccionJugador === "shot") {
              icono_accionJugador = ["glass"];
            } else if (valorAccionJugador === "cascada") {
              icono_accionJugador = ["users"];
            } else if (valorAccionJugador === "historia") {
              icono_accionJugador = ["book"];
            } else if (valorAccionJugador === "piquito") {
              icono_accionJugador = ["heart-o"];
            } else if (valorAccionJugador === "beso") {
              icono_accionJugador = ["heart"];
            } else if (valorAccionJugador === "prenda") {
              icono_accionJugador = ["shopping-bag"];
            } else if (valorAccionJugador === "penitencia") {
              icono_accionJugador = ["exclamation-circle"];
            } else if (valorAccionJugador) {
              icono_accionJugador = ["beer"];
            }

            $scope.jugadores = texto_turnoJugador + " " + textoAccionJugador;
            $scope.ejemplos = textoEjemploAccionJugador;
            $scope.onoff = false;
            $scope.icono_accionJugador = icono_accionJugador;

        }

    }
])

.controller('jugadoresCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('nuevoJugadorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('Menu', function($scope) {
    $scope.toggle = {
        gomitas: true,
        companero: true,
        shot: true,
        piquito: true,
        beso: true,
        prenda: true,
        penitencia: true
    };
});