# PRÁCTICA 2: BOOLEAN ARITHMETIC AND MEMORY

En esta práctica se realizan los proyectos 2 y 3 de Nand2Tetris, donde se tratan aspectos importantes relacionados con la lógica aritmética y la memoria o lógica secuencial.   


## Proyecto 2: Boolean Arithmetic

### HalfAdder
Para realizar la suma de dos bits, se necesitan hallar tanto la lógica del sum como del carry, que son bastante sencillas (Con ayuda de la tabla de la verdad). Para el carry simplemente se necesita un and entre a y b; para sum sería un xor entre ambos.

### FullAdder
Para el fulladder o suma de tres bits A, B y uno de acarreo C. Al igual que el halfadder genera dos salidas: sum y carry, donde carry sería el bit de acarreo que se usaría en la siguiente suma. Para sum, después de generar las ecuaciones se hace mediante un xor entre las tres entradas. Por el lado del carry la ecuación genera ab + bc + ac, que sería similar a hacer un mux donde el sel es A y las entradas son bAndC y bOrc.

### Add16
Add16 es una suma entre dos entradas, ambas de 16 bits. Se realiza mediante la ayuda de los circuitos anteriormente creados, donde en la suma de los primeros bits, al no llevar nada de acarreo se hace mediante un halfadder; en las sumas posteriores dado que si es posible llevar un bit de acarreo se hace con un fulladdery así sucesivamente.

### Inc16
Su funcionamiente es sumar 1 a una entrada de 16 bits, por lo que es un poco similar al anterior circuito. La diferencia es que acá solo se hace mediante halfadder en el que al primer bit se le suma 1 poniendo el parametro b en true, y en los posteriores simplemente se le da el acarreo de la anterior suma.

### ALU


## Proyecto 3: Memory


## Referencias 

How to make an ALU, https://www.youtube.com/watch?v=Vtcm1oSSI0o

Aritmetic Logic Unit. https://www.youtube.com/watch?v=PEs855FNCOw&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI&index=17

The Element of Computing Systems, capítulo 2. https://www.nand2tetris.org/_files/ugd/44046b_89c60703ebfc4bf39acef13bdc050f5d.pdf

[def]: image.png