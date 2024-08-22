# PRÁCTICA 1: BOOLEAN LOGIC

Como proposito de esta práctica será familiarizarse con el ambiente de Nand2Tetris y comprender le funcionamiento de las compuertas lógicas.
Está práctica es realizada en la carpeta del proyecto 1 de nand2tetris donde se utilizó el software online y de escritorio. El punto de partida será la compuerta NAND, con la cual se hará la construcción de las demás compuertas mostradas a continuación.

## Compuerta NOT
Para la realización de esta compuerta basto con mantener una entrada de la nand en "true" (1) con lo cual nos permite obtener el contrario de la segunda entrada debido al funcionamiento de la compuerta nand.

![1](https://github.com/user-attachments/assets/4a8c0106-7183-44f8-abcf-3d87031d1757)

## Compuerta AND
Para la realización de esta compuerta fue necesario negar la nand, debido a que esta tiene la lógica inversa de la and, para esto se utilizó la not anteriormente creada.

![2](https://github.com/user-attachments/assets/138fd9bc-acb6-4ee4-957c-d77e518fdb70)

## Compuerta OR
Para la realización de esta compuerta se utilizarón tres compuertas nand, donde dos de ellas tienen cada una una entrada en "true" lo que nos permite obtener de cierta manera cero como salida por si los dos input que se manejan 
en compuertas diferente son "1" y así obtener un cero en las dos entradas de la tercera compuerta nand y esta obtener la salida correspondiente. Por lo cual se obtiene la compuerta or.
![3](https://github.com/user-attachments/assets/4f63e51c-8944-4c86-b230-5e9d87e5fc8d)

## Compuerta XOR
Para la realización de esta compuerta que en cierta parte es similar a la compuerta or, fue necesario dos compuertas not, dos and y una or, lo que nos permite obtener los inversos de las entradas inicialmente que junto con las and y la not en el caso que sea las entradas doble uno. obtengamos un cero.

## Compuerta MUX
Para la realización de esta compuerta también llamada multiplexor que contiene un selector encargado de intercambiar entre los canales, fue necesario dos compuertas and, una not y una or, las que nos permitó recrear la lógica de la compuerta mux.

## Compuerta DMUX
Para la realización de esta compuerta también conocida como demultiplexor, la cual funciona de por decirlo así de manera contraría a un multiplexor donde se espera una entrada y varias salias que dependen de un selector. Por lo cual fue necesario utilizar dos and y una not menos debido a que ya no necesitaremos dos selectores si no uno.

## Compuerta NOT16
Esta compuerta es similar a la not convencional, lo que difiere es que esta procesa más bits, entendiendose como más entradas, por lo cual no se espera solo un 1 o un 0 sino una cadena de estos, en la que trata cada bit con una compuerta not por separado.

## Compuerta AND16
Para esta compuerta al igual que se hizo en not16, fue necesario varias and las cuales se encargan de "procesar" cada bit.

## Compuerta OR16
De igual manera que se realizarón las compuertas and16 y not16, se empleo el mismo modelo pero en este caso con las compuertas or anteriormente creada.

## Compuerta MUX16
Para el procesamiento de barios bits en este caso en un multiplexor fue necesario asignarle cada bit a cada compuerta mux teniendo en claro que estas tiene dos entradas al igual que las anteriores dos compuertas de 16 bits realizadas.

## Compuerta OR8WAY
Para la realización de esta compuerta se tiene en cuenta que son varias compuertas or una tras otra, para así lograr tener 8 entradas de un bits similar a las recientes compuertas realizadas, pero con una diferencia en la cual se une la salida de una con la entrada de otra para lograr obtener solo un bit de salida. Por lo que fue necesario siete compuertas or.

## Compuerta MUX4WAY16
Esta compuerta es una combinacion de otras compuertas mux, en la cual se espera 4 entradas de 16 bits y luego obtener una salida de 1 bit, para esto fue necesario 3 compuertas mux y una compuerta xor la cual es la encargada de variar el selector de la ultima compuerta mux.

## Compuerta MUX8WAY16
Para esta compuerta al similar a la anterior, se espera la salida de 1 bit pero con ocho entradas de 16 bits, por lo cual fue necesario utilizar dos mux4way16 que se realizó anteriormente y una compuerta mux16 ya que maneja también 16 bits, así evitando una gran cantidad de compuertas.

## Compuerta DMUX4WAY
Para la realización de este demultiplexor fue necesario utilizar ocho compuertas and y dos not, pero ya no para obtener 4 entradas sino 4 salidas, ya que una caracteristica de estas compuertas es que reciben una entrada y dependiendo del selector se elige entre una de sus salidas.

## Compuerta DMUX8WAY
Para esta compuerta fue de gran ayuda utilizar la anterior compuerta realizada, debido a que utilizar dos de esas compuertas podemos obtener las 8 salidas requeridas, además se utilizo una compuerta dmux la cual se encargara del input principal.




## Referencias

https://drive.google.com/file/d/1MY1buFHo_Wx5DPrKhCNSA2cm5ltwFJzM/view

https://drive.google.com/file/d/1dPj4XNby9iuAs-47U9k3xtYy9hJ-ET0T/view

The Element of Computing Systems, capítulo 1. https://www.nand2tetris.org/_files/ugd/44046b_f2c9e41f0b204a34ab78be0ae4953128.pdf

[Part 1] Unit 0.0/1.8 https://www.youtube.com/watch?v=LqirVc5SlW0&list=PLrDd_kMiAuNmSb-CKWQqq9oBFN_KNMTaI 
