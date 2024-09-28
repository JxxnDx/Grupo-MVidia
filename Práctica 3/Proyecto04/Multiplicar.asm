//Multiplicar dos numero 
// The program computes the product R0 * R1 and stores the result in
// R2 (RAM[2]). Assume that R0 ≥ 0, R1 ≥ 0, and R0 * R1 < 32768
@R2
M=0
@R0
D=M
@END
D;JEQ // Evaluamos si es cero, pues * por cero da cero
@R1
D=M
@END
D;JEQ // Evaluamos si es cero, pues * por cero da cero

@BUCLE // Evaluamos si es mayor a cero
D;JGT

(BUCLE) //Inicia bucle
@R0	
D = M
@R2
M = M + D 
@R1 //las iteraciones 
D = M-1
M = D
@END
D;JEQ
@BUCLE // Evaluamos si es mayor a cero
D;JGT

(END)

	