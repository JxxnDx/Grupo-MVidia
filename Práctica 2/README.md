# PRÁCTICA 2: BOOLEAN ARITHMETIC AND MEMORY

En esta práctica se realizan los proyectos 2 y 3 de Nand2Tetris, donde se tratan aspectos importantes relacionados con la lógica aritmética y la memoria o lógica secuencial.   


## Proyecto 2: Boolean Arithmetic

### HalfAdder
Para realizar la suma de dos bits, se necesitan hallar tanto la lógica del sum como del carry, que son bastante sencillas (Con ayuda de la tabla de la verdad). Luego de realizar las respectivas ecuaciones, se concluye que para el carry simplemente se necesita un and entre a y b; para sum sería un xor entre ambos.

![halfadder](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%202/Proyecto02/imgs/1.png)

![halfadder](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%202/Proyecto02/imgs/1_1.png)

### FullAdder
Para el fulladder o suma de tres bits A, B y uno de acarreo C. Al igual que el halfadder genera dos salidas: sum y carry, donde carry sería el bit de acarreo que se usaría en la siguiente suma. Para sum, después de generar las ecuaciones se hace mediante un xor entre las tres entradas. Por el lado del carry la ecuación genera ab + bc + ac, que sería similar a hacer un mux donde el sel es A y las entradas son bAndC y bOrc.

![fulladder](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%202/Proyecto02/imgs/2.png)

### Add16
Add16 es una suma entre dos entradas, ambas de 16 bits. Se realiza mediante la ayuda de los circuitos anteriormente creados, donde en la suma de los primeros bits, al no llevar nada de acarreo se hace mediante un halfadder; en las sumas posteriores dado que si es posible llevar un bit de acarreo (que sería el carry de la anterior "suma") se hace con un fulladder y así sucesivamente hasta completar la suma.

### Inc16
Su funcionamiento es sumar 1 a una entrada de 16 bits, por lo que es un poco similar al anterior circuito. La diferencia es que acá solo se hace mediante halfadder en el que al primer bit se le suma 1 asignando a la entrada b el valor true, y en los posteriores simplemente se le da el acarreo de la anterior suma.

### ALU
El operador ALU sube un poco la dificultad del proyecto, pero se trabaja de manera similar a los anteriores. En el capítula nos dan una serie de pasos o reglas para llegar a la salida final.

Primero, nos dan pasos para pre establecer las entradas X y Y según los valores de entrada nx y zx (o ny y zy, en ambos es la misma lógica). Si zx es true o 1, se le asigna a X el valor de 0; por otro lado, si nx es 1, se niega el valor que lleve X. La misma lógica se usa para pre establecer Y. Basndonos en esta lógicas, creamos la tabla de la verdad, basándonos primero en el requisito de que si zx es 1 X se hace 0, por lo que indicamos en la tabla. Luego, nos fijamos en cuando nx es 1 para negar el valor con el que quedó x.

![tablax](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%202/Proyecto02/imgs/tablax.png)

Vemos una similitud existente con el funcionamiento de un mux4way16, por lo que procedemos a usarlo para más facilidad:

![prex](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%202/Proyecto02/imgs/4_1.png)

Luego de haber establecido los valores de X y Y, debemos fijarnos en el valor de f, si es 1 se hace la suma entre x + y, de lo contrario un and entre los dos. Para esto se usa un multiplexor, habiendo definido previamente con un add16 y un and16 los valores de x+y y xandy; si el valor de f es 1 se toma como salida la entrada de add16, si es 0 se toma como salida la entrada de xandy.

Para finalizar con la salida (out), debemos usar otro multiplexor, esta vez para escoger cuando negar o no la salida obtenida del paso anterior. Si no=1 entonces se niega la salida, de lo contrario se deja tal como está. En este mismo paso podemos aprovechar para asignar los valores de zr y ng. Si el MSB es 1, ng también lo es, de lo contrario es 0. Para zr es un poco más complejo, debemos guardar el MSB y el LSB dividiendo la salida, para hacer un or8way de cada uno de ellos, y posteriormente un  OR entre el resultado de ambos. Para obtener el valor final de zr, negamos esta salida y así se completa el operador ALU.

## Proyecto 3: Memory

En este proyecto, se planea construir gradualmente una unidad de RAM, introduciendo conceptos clave como secuencias, flip-flops, almacenamiento de bits, contadores, entre otros. Además, se hace uso de los chips previamente construidos, teniendo como base el chip DFF, que se proporciona como primitivo, al igual que la compuerta NAND en el Proyecto 1. Con estos fundamentos, se desarrollan los siguientes chips:

### BIT
Para la realización de este chip, fue necesario un DFF y una multiplexor, 
los cuales nos permiten almacenar previamente un bit, donde la entrada load
es crucial para aquello. La construcción de este chip en parte fue sencilla debido a que nos proporcionan el DFF (que se puede construir con compuertas AND) y en el video de apoyo fue descrita la lógica.

{IMAGEN}

### REGISTER
Para la realización de este chip fue esencial comprender como este está compuesto, si revisamos la teoría nos damos cuenta que está formado por varios bits, por lo cual, fue necesario utilizar el chip bit (construido anteriormente) para cada bit de entrada. Este chip se puede asemejar a las
muñecas rusas, donde una tiene en el interior otra pero en un tamaño menor, a medida que avancemos en los siguientes chips le encontraremos más sentido a esto.

{IMAGEN}

### RAM8
Para la realización de este chip fue clave en prestar atención en los consejos dados en la teoría, donde nos recomiendan el uso de chips anteriormente construidos como el MUX y DMUX. Si observamos con detenimiento el funcionamiento de este chip a construir, nos damos cuenta que esta conformado por varios registros en los cuales se almacena y se solicita cierta entrada, por lo cual para el manejo de almacenamiento y solicitudes fue necesario utilizar un DMUX8WAY el cual actúa como load de cada registro para elegir en quién guardar la información, por eso la entrada (in) va directa a cada chip registro debido a que no se tiene un DMUX8EAY16 el cual nos permita guardar directamente 16 bits en cada registro. Ahora bien para la solicitudes se utilizó un MUX8WAY16 el cual sus entradas son las salidas de cada registro, permitiendo obtener información dependiendo de la dirección dada.

{IMAGEN}

### RAM64
Para la realización de este chip, en gran parte se utiliza la misma lógica que el anterior chip construido por dos razones. La primera razón es debido que el funcionamiento de almacenar y de obtener información es igual, solo que en vez de registros se utiliza el chip RAM8, el cual es la segunda razón de utilizar la misma lógica debido a que varios chips de este forman uno con mayor tamaño, donde se retoma la analogía de las muñecas rusas. Por lo tanto fue necesario utilizar 8 chips RAM8, una DMUX8WAY y un MUX8WAY16.

{IMAGEN}

### RAM 512
Este chip implementa una memoria de 512 palabras, donde cada palabra tiene 16 bits. Se construye con 8 módulos de RAM 64 y un multiplexor de 8 bits. Esto lo que permite es seleccionar cuál de los módulos de 64 palabras está siendo accedido para la lectura como escritura. Funciona de la siguiente manera: La entrada de datos se conecta a los módulos RAM64, y la selección del módulo específico se realiza usando las tres bits superiores de la dirección. Estos tres bits superiores de la dirección seleccionan cuál de los 8 módulos RAM64 se utilizará. Si se utiliza los seis bits inferiores de la dirección seleccionan una palabra específica dentro del módulo RAM64. Dependiendo de la señal de control de escritura (load), los datos se escriben en la dirección seleccionada o se leen desde ella.

{IMAGEN}

### RAM 4K

Este chip es de memoria de 4096 palabras, con 16 bits por palabra. Este construye a partir de 8 módulos de RAM 512 y un multiplexor de 8 bits. Esto lo que permite es seleccionar cuál de los módulos de 512 palabras está siendo accedido para la lectura como escritura. Funciona de la siguiente manera: La entrada de datos se conecta a los módulos RAM512, y los bits más significativos de la dirección determinan el módulo seleccionado. Si se utilizan tres bits superiores de la dirección seleccionan cuál de los 8 módulos RAM512 se utilizará.
Si solo se usan los nueve bits inferiores de la dirección especifican la palabra exacta dentro del módulo RAM512. La señal de control de escritura (load) determina si se escriben los datos en la dirección seleccionada o si se leen los datos.

{IMAGEN}

### RAM16K
Este chip presenta una construcción ligeramente diferente en comparación con los otros chips de RAM que hemos diseñado. Sin embargo, seguimos utilizando el chip anterior junto con el multiplexor y el demultiplexor. En este caso, empleamos los componentes Dmux4way y Mux4way16, ya que la Ram16k está compuesta por cuatro módulos Ram4k. Así, el selector tanto del Dmux4way como del Mux4way ahora solo considera los dos últimos bits de la dirección (address), mientras que los 12 bits restantes se dirigen a la Ram4k.

{IMAGEN}

### PC (Program Counter)
El chip PC es un contador de programa encargado de almacenar y gestionar las direcciones de las instrucciones. Puede incrementar la dirección actual, cargar una nueva dirección y restablecerse a cero, dependiendo de las señales de control recibidas: inc (incremento), load (carga) y reset (reinicio). La salida out[16] es la que representa la dirección actual almacenada en el contador de programa.

{IMAGEN}

## Preguntas adicionales:

### 1. ¿Cuál es el objetivo de cada uno de esos proyectos con sus palabras y describa que debe hacer para desarrollarlo?

El objetivo para realizar el curso y los proyectos de Nand2Tetris, es construir una computadora completa utilizando circuitos lógicos básicos hasta ir creando circuitos más complejos esto quiere decir que vamos a utilizar sistemas operativos y lenguajes de programación, esto nos ayuda a seguí aprendiendo acerca como funciona realmente una computadora desde cero.  En cada proyecto tiene uno conjuntos de actividades diferentes por ejemplo llevamos dos actividades de proyecto para solucionar lo hecho de manera diferente lo que hemos hecho es: 

Para la práctica 1 el objetivo como grupo es construir las compuertas lógicas básicas como NOT, AND, OR y después se utiliza otros componentes como la compuerta lógica NAND, está es una computadora importante ya que es fundamental para el curso de NAND2TETRIS. Para poder desarrollar este proyecto necesitamos conocer y saber utilizar el lenguaje de programación HDL(Hardware Descriptivo) para poder implementar las compuertas lógicas esto se hace en el simulador para saber si está funcionando adecuadamente según las especificaciones que nos dicen en la descripción de la práctica 1. 

Para la práctica 2 está tiene como objetivo es desarrollar circuitos un poco más complejos que en la práctica anterior  ya que en esta se utiliza multiplexores, desmultiplexores, sumadores y unidad aritmético lógico pero esto también usa las compuertas realizadas anteriormente en la práctica 1. Acá se hace es combinar las puertas lógicas básicas para ir creando circuitos combinatorios.  

Ahora bien, para el proyecto 3 el objetivo es construir unidades de memoria capaces de almacenar bits, y a la vez que se puedan localizar y además construir un nuevo contador (Pc). Para ello comenzamos con el chip primitivo DFF con el que se puede construir un bit y este a la vez nos permite construir las demás unidades, considerando que la siguiente es una suma de la anterior.  

Para las tres prácticas que hemos desarrollado hacemos lo mismo primero es leer bien que nos piden después es realizar el codigo de programación (HDL) para saber si la salida de cada circuito integrado funciona correctamente. Después analizamos las entradas y salida que salen del codigos y  para finalizar creamos los diagramas de cada circuito integrado. 

### 2. Explique las principales diferencias entre la lógica aritmética y la lógica secuencial.

La lógica aritmética, o combinacional, realiza operaciones basadas únicamente en las entradas actuales, sin depender de estados anteriores ni tener memoria. Ejemplos de esta lógica son los sumadores y multiplexores, usados en operaciones matemáticas. En contraste, la lógica secuencial depende tanto de las entradas actuales como de los estados previos, gracias a la memoria integrada. Estos circuitos, como los flip-flops y contadores, operan de manera síncrona, coordinados por un reloj, y son esenciales para el seguimiento de estados y almacenamiento de datos en sistemas más complejos.

## BONUS
¿Qué tipo de unidades aritmético lógicas existen?

ALU Simple: Realiza operaciones básicas como suma, resta, AND, y OR. Usada en sistemas simples.
ALU Compleja: Además de las operaciones básicas, realiza multiplicaciones y divisiones. Común en procesadores avanzados.
ALU Vectorial (SIMD): Realiza la misma operación en múltiples datos simultáneamente. Usada en gráficos y computación de alto rendimiento.
ALU Escalar: Procesa un solo conjunto de datos a la vez. Común en procesadores estándar.
ALU Paralela: Procesa múltiples operaciones simultáneamente. Usada en sistemas de procesamiento paralelo.
ALU de Punto Flotante: Especializada en operaciones con números en punto flotante. Es crucial en gráficos y simulaciones.
ALU Bit-slice: Modular, permite construir ALUs de tamaño variable. Utilizada en sistemas personalizados.


## Referencias 

How to make an ALU, https://www.youtube.com/watch?v=Vtcm1oSSI0o

Aritmetic Logic Unit. https://www.youtube.com/watch?v=PEs855FNCOw&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&index=17

The Element of Computing Systems, capítulo 2. https://www.nand2tetris.org/_files/ugd/44046b_89c60703ebfc4bf39acef13bdc050f5d.pdf

Nand2Tetris Project 03 Sequential Logic: flip flop, register, RAM and program counter. https://www.youtube.com/watch?v=5uSDC4Y_mVg&list=PLT4mIxZjQO1rTavJ5zelv_gr0rR7lkAwm&index=5

[Part 1] Unit 3.5 - Project 3 Overview. https://www.youtube.com/watch?v=u2O_9sZInU4&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&index=24

MakkuZjAileron. (2018, 16 enero). [Part 1] Unit 3.5 - Project 3 Overview [Vídeo]. YouTube. https://www.youtube.com/watch?v=u2O_9sZInU4

Yang Su. (2022, 20 marzo). Nand2Tetris Project 03 Sequential Logic: flip flop, register, RAM and program counter. [Vídeo]. YouTube. https://www.youtube.com/watch?v=5uSDC4Y_mVg

lecture 3.pdf. (s. f.). Google Docs. https://drive.google.com/file/d/1boFooygPrxMX-AxzogFYIZ-8QsZiDz96/view
