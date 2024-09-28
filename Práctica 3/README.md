# PROYECTO 4

En este proyecto se propone programar por medio del lenguaje ensamblador, dos programas, donde el primero realiza una multiplicación de dos números, y el segundo programa interactúa con el teclado.

## Multiplicación de dos números

Para el desarrollo de este programa se realizó primero un pseudocódigo con la lógica a emplear, puesto que no existe la multiplicación en el lenguaje, por lo cual fue necesario utilizar una suma la cual se repite n veces hasta cumplir cierta condición, está fue representada en lenguaje correspondiente. El programa obtiene los números por medio de R0 y R1, y el resultado se muestra en R2, siempre teniendo en cuenta la siguiente condición "Assume that R0 ≥ 0, R1 ≥ 0, and R0 * R1 < 32768"

La estructura del código establece inicialmente el valor clave el cual se va a repetir por el segundo valor ingresado, después verifica que estos valores no sean igual a cero debido a que obtendríamos cero inmediatamente, si esto no ocurre se procede con el bucle que contiene la sumatoria. Se tuvieron en cuenta los siguientes 

![multi](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%203/img/img4_1.jpg)

## Interacción pantalla
La función de este programa era ilustrar cómo es el manejo de bajo nivel de la la interacción entre la pantalla y el teclado. Se trabaja como un bucle infinito, cuando una tecla es presionada la pantalla automáticamente se pone de color negro, y no cambia nuevamente a color blanco hasta que se suelta la tecla. 

Pantalla negra mientras se presiona una tecla:


Pantalla blanca cuando no se presiona una tecla:


Para esto el programa ejecuta un ciclo infinto para detectar cuando una tecla es presionada y escribir "negro" en cada pixel de la pantalla. Cuando la tecla deja de ser presiionada la pantalla se limpiará excribiendo "blanco" o "vacío".

# PROYECTO 5

Componentes

## MEMORY

Memoria de acceso aleatorio (RAM) que se contruye desde cero usando puertas lógicas fundamentales. Este componente crucial permite el almacenamiento temporal de información durante la ejecución de programas y está estructurado en direcciones para acceder a ubicaciones específicas. Se implementa mediante el archivo Memory.hdl y es clave para cargar y guardar tanto datos como instrucciones que la CPU requiere para ejecutar programas, contribuyendo así a la creación de una computadora completa desde el nivel más básico del hardware en el proyecto Nand2tetris.

## CPU

La CPU (Unidad Central de Procesamiento) es el componente central de la computadora, responsable de ejecutar instrucciones y realizar operaciones aritméticas y lógicas sobre los datos. Está diseñado para procesar un conjunto específico de instrucciones, definido por el lenguaje de ensamblaje utilizado, que en el caso del proyecto Nand2tetris es el "Lenguaje Hack".

En este proyecto, la CPU se construye a partir de puertas lógicas básicas como NAND, AND y OR, y se describe en detalle en el archivo CPU.hdl . Este archivo especifica cómo se interconectan estas puertas para formar los componentes esenciales de la CPU, tales como la unidad de control, la unidad aritmético-lógica(ALU) y los registros.

La CPU se encarga de ejecutar las instrucciones almacenadas en la memoria de forma secuencial, recuperándolas, decodificándolas y llevándolas a cabo. Además, gestiona el flujo de datos entre la memoria y otros dispositivos de entrada/salida, y maneja el procesamiento de interrupciones y excepciones.

![cpu](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%203/img/CPU.PNG)

## COMPUTER

La unidad de hardware completa que se construye en el proyecto Nand2tetris es el resultado de integrar todos los componentes individuales, como la CPU, la memoria, y los dispositivos de entrada/salida, entre otros. Este sistema final se implementa mediante el archivo Computer.hdl, que juega un papel crucial al definir la estructura y el comportamiento de la computadora en su totalidad. Es en este archivo donde se especifica cómo interactúan todos los componentes, logrando una máquina funcional capaz de ejecutar programas desde el nivel más bajo del hardware.

![pc](https://github.com/JxxnDx/Grupo-MVidia/blob/main/Pr%C3%A1ctica%203/img/COMPUTER.PNG)

# Preguntas adicionales:
## 1. ¿Por qué el lenguaje de máquina es importante para definir la arquitectura computacional?

El lenguaje de máquina es fundamental en la parte de la arquitectura computacional porque es el único lenguaje que la computadora entiende directamente. En la parte de arquitectura este lenguaje describe cómo se maneja el hardware dentro de  la computadora está organizado y cómo se va ejecutando las instrucciones. Para este lenguaje de máquina podemos definir varias operaciones que se pueden realizar en el hardware, por ejemplo mover datos o realizar cálculos.

Podemos decir que la arquitectura de computadoras se usa  para optimizar las  ejecuciones de las instrucciones de lenguaje de máquina de la forma más eficiente posible. Por ejemplo, en una arquitectura de tipo RISC (Reduced Instruction Set Computer), las instrucciones de máquina son más simples y rápidas, lo que permite un rendimiento más ágil. En cambio, arquitecturas como CISC (Complex Instruction Set Computer) tienen instrucciones más complejas que realizan tareas más avanzadas en una sola operación. En ambos casos, el diseño de la arquitectura depende directamente del lenguaje de máquina para maximizar el rendimiento y gestionar los recursos del sistema, como la memoria y el procesamiento, de manera efectiva.

## 2. ¿Qué diferencia ven entre arquitectura computacional, arquitectura de software y arquitectura del sistema? Justifique su respuesta.

Podemos decir que la arquitectura computacional está enfocada en el diseño de hardware, como el procesador y la memoria, y cómo se ejecutan las instrucciones. En la arquitectura de software  se organiza a los componentes del software para que estos sean más eficientes, modulares y mantenibles,  y tengan un  enfoque en cómo se comunican los módulos de códigos.  Por último tenemos la arquitectura del sistema esta es más amplia e integra tanto el hardware como el software, además de otros elementos como redes y bases de datos, para cumplir con los objetivos completos del sistema.
Una de las diferencias que tienen es que se radica en el nivel de abstracción: con la arquitectura computacional está más cerca del hardware y la de software se centra en el diseño lógico, y la parte de la de sistemas es la que abarca todo ya que  es un conjunto integrado.

# BONUS:
Como informático o computista: ¿La arquitectura computacional o la arquitectura del sistema no tiene en cuenta igualmente la arquitectura de software? Justifique su respuesta.

En las dos arquitecturas tienen que considerar a la arquitectura de software pero lo hacen de distintas maneras y con diferentes grados  de importancia. 
Arquitectura computacional está tratando de maximizar el rendimiento del hardware, el software necesita ejecutarse eficientemente sobre el hardware, mientras que el software necesita eficientemente sobre el hardware. Ya que, se diseñan con características específicas que ayudan con la ejecución de programas,  , pero sin que la arquitectura computacional se dedique explícitamente al diseño del software.
Arquitectura del sistema requiere un análisis más profundo en la parte de software que se comparte en relación con el hardware y otros componentes del sistema,  porque su propósito es garantizar que todas las partes puedan  funcionar juntas de manera eficiente. Por tanto, el diseño de software es fundamental para alcanzar los objetivos del sistema.
Podemos decir para finalizar que la arquitectura computacional tiene en cuenta el software solo en relación con la eficiencia de su ejecución en el hardware, la arquitectura del sistema sí lo considera de manera más integral, ya que necesita que software y hardware trabajen juntos de manera óptima para cumplir con los objetivos globales del sistema.


# REFERENCIAS:

Yang Su. (2022, March 26). Nand2Tetris Project 05 (Part 1) Data Memory and Memory Mapped Input Output. YouTube. https://www.youtube.com/watch?v=ckYSlJtpXaE

‌Yang Su. (2022, March 30). Nand2Tetris Project 05 (Part 2) Hack CPU Central Processing Unit. YouTube. https://www.youtube.com/watch?v=CBeVn-RSavk

‌MakkuZjAileron. (2018, January 16). [Part 1] Unit 5.5 - Project 5 Overview. YouTube. https://www.youtube.com/watch?v=wMxgU7RmETA

Computer Architecture: A Quantitative Approach 6th Edition : Free Download, Borrow, and Streaming : Internet Archive. (2019). Internet Archive. https://archive.org/details/computerarchitectureaquantitativeapproach6thedition

File Download Computer Architecture, Sixth Edition: A Quantitative Approach PDF by John L. Hennessy, David A. Patterson. (2017). Pdfdrive.to. https://www.pdfdrive.to/filedownload/computer-architecture-sixth-edition-a-quantitative-approach-pdf

Nand2Tetris proyectos 4 y 5: Programación en lenguaje de maquina y arquitectura informática. https://www.youtube.com/watch?v=oDrLvsnxIwA

https://coderprog.com/computer-architecture-quantitative-approach-6th/

https://youtu.be/-n3eqsVZN3E?si=lybK1OEe0bPC84fl
