# PRÁCTICA 2: BOOLEAN ARITHMETIC AND MEMORY

En esta práctica se realizan los proyectos 2 y 3 de Nand2Tetris, donde se tratan aspectos importantes relacionados con la lógica aritmética y la memoria o lógica secuencial.   


## Proyecto 2: Boolean Arithmetic

### HalfAdder
Para realizar la suma de dos bits, se necesitan hallar tanto la lógica del sum como del carry, que son bastante sencillas (Con ayuda de la tabla de la verdad). Luego de realizar las respectivas ecuaciones, se concluye que para el carry simplemente se necesita un and entre a y b; para sum sería un xor entre ambos.

![halfadder](imgs/1.png)

![halfadder](imgs/1_1.png)

### FullAdder
Para el fulladder o suma de tres bits A, B y uno de acarreo C. Al igual que el halfadder genera dos salidas: sum y carry, donde carry sería el bit de acarreo que se usaría en la siguiente suma. Para sum, después de generar las ecuaciones se hace mediante un xor entre las tres entradas. Por el lado del carry la ecuación genera ab + bc + ac, que sería similar a hacer un mux donde el sel es A y las entradas son bAndC y bOrc.

![fulladder](imgs/2.png)

### Add16
Add16 es una suma entre dos entradas, ambas de 16 bits. Se realiza mediante la ayuda de los circuitos anteriormente creados, donde en la suma de los primeros bits, al no llevar nada de acarreo se hace mediante un halfadder; en las sumas posteriores dado que si es posible llevar un bit de acarreo (que sería el carry de la anterior "suma") se hace con un fulladder y así sucesivamente hasta completar la suma.

### Inc16
Su funcionamiento es sumar 1 a una entrada de 16 bits, por lo que es un poco similar al anterior circuito. La diferencia es que acá solo se hace mediante halfadder en el que al primer bit se le suma 1 asignando a la entrada b el valor true, y en los posteriores simplemente se le da el acarreo de la anterior suma.

### ALU
El operador ALU sube un poco la dificultad del proyecto, pero se trabaja de manera similar a los anteriores. En el capítula nos dan una serie de pasos o reglas para llegar a la salida final.

Primero, nos dan pasos para pre establecer las entradas X y Y según los valores de entrada nx y zx (o ny y zy, en ambos es la misma lógica). Si zx es true o 1, se le asigna a X el valor de 0; por otro lado, si nx es 1, se niega el valor que lleve X. La misma lógica se usa para pre establecer Y. Basndonos en esta lógicas, creamos la tabla de la verdad, basándonos primero en el requisito de que si zx es 1 X se hace 0, por lo que indicamos en la tabla. Luego, nos fijamos en cuando nx es 1 para negar el valor con el que quedó x.

![tablax](tablax.png)

Vemos una similitud existente con el funcionamiento de un mux4way16, por lo que procedemos a usarlo para más facilidad:

![prex](imgs/4_1.png)

Luego de haber establecido los valores de X y Y, debemos fijarnos en el valor de f, si es 1 se hace la suma entre x + y, de lo contrario un and entre los dos. Para esto se usa un multiplexor, habiendo definido previamente con un add16 y un and16 los valores de x+y y xandy; si el valor de f es 1 se toma como salida la entrada de add16, si es 0 se toma como salida la entrada de xandy.

Para finalizar con la salida (out), debemos usar otro multiplexor, esta vez para escoger cuando negar o no la salida obtenida del paso anterior. Si no=1 entonces se niega la salida, de lo contrario se deja tal como está. En este mismo paso podemos aprovechar para asignar los valores de zr y ng. Si el MSB es 1, ng también lo es, de lo contrario es 0. Para zr es un poco más complejo, debemos guardar el MSB y el LSB dividiendo la salida, para hacer un or8way de cada uno de ellos, y posteriormente un  OR entre el resultado de ambos. Para obtener el valor final de zr, negamos esta salida y así se completa el operador ALU.

## Proyecto 3: Memory


## Referencias 

How to make an ALU, https://www.youtube.com/watch?v=Vtcm1oSSI0o

Aritmetic Logic Unit. https://www.youtube.com/watch?v=PEs855FNCOw&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&index=17

The Element of Computing Systems, capítulo 2. https://www.nand2tetris.org/_files/ugd/44046b_89c60703ebfc4bf39acef13bdc050f5d.pdf

Nand2Tetris Project 03 Sequential Logic: flip flop, register, RAM and program counter. https://www.youtube.com/watch?v=5uSDC4Y_mVg&list=PLT4mIxZjQO1rTavJ5zelv_gr0rR7lkAwm&index=5

[Part 1] Unit 3.5 - Project 3 Overview. https://www.youtube.com/watch?v=u2O_9sZInU4&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&index=24

