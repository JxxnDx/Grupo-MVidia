const file = document.getElementById('file');
const output = document.getElementById('output');

//TABLAS PREDEFINIDAS
const comp = {
    '0': '0101010',
    '1': '0111111',
    '-1': '0111010',
    'D': '0001100',
    'A': '0110000',
    '!D': '0001101',
    '!A': '0110001',
    '-D': '0001111',
    '-A': '0110011',
    'D+1': '00011111',
    'A+1': '0110111',
    'D-1': '0001110',
    'A-1': '0110010',
    'D+A': '0000010',
    'D-A': '0010011',
    'A-D': '0000111',
    'D&A': '0000000',
    'D|A': '0010101',
    'M': '1110000',
    '!M': '1110001',
    '-M': '1110011',
    'M+1': '1110111',
    'M-1': '1110010',
    'D+M': '1000010',
    'D-M': '1010011',
    'M-D': '1000111',
    'D&M': '1000000',
    'D|M': '1010101'
}

const dest = {
    'undefined': '000',
    'M': '001',
    'D': '010',
    'MD': '011',
    'A': '100',
    'AM': '101',
    'AD': '110',
    'AMD': '111'
}

const jump = {
    'undefined': '000',
    'JGT': '001',
    'JEQ': '010',
    'JGE': '011',
    'JLT': '100',
    'JNE': '101',
    'JLE': '110',
    'JMP': '111'
}

// Output
function mostrar(texto) {
    output.innerHTML += texto + '<br>';
}

// VARIABLES ENCONTRADAS
let variables = new Map();
// ETIQUETAS ENCONTRADAS
let etiquetas = new Map();

file.addEventListener('change', function () {
    let reader = new FileReader();
    let cont_variables = 16;
    let cont_lineas = 0;
    output.innerHTML = '';
    reader.onload = function () {
        const lines = reader.result.split('\n');
        //Mapear las etiquetas '(' y ')'
        lines.forEach((line) => {  
            line = line.trim();
            if (!(line[0] === '/' || line === '' || line [0] === '(')){
                cont_lineas++;
            }else if(line[0] === '('){
                let num = cont_lineas;
                let bin = num.toString(2);
                num = bin.padStart(16, '0');
                etiquetas.set(line.slice(1, line.length - 1), num);
            }
        });

        lines.forEach((line) => {
            line = line.trim();
            if (!(line[0] === '/' || line === '' || line [0] === '(')) { // ignoramos los comentarios y espacios en blanco
                //Para las instrucciones tipo @   
                if (line[0] == '@') {
                    if (/^[0-9]$/.test(line[1])) { //Para los numeros de registro @1
                        let num = parseInt(line.slice(1, line.length));
                        let bin = num.toString(2);
                        num = bin.padStart(16, '0');
                        mostrar(num);
                    } else if (line[1] == 'R') { //Para los registros tipo @R1 Y No hay variables por R
                        let num = parseInt(line.slice(2, line.length));
                        let bin = num.toString(2);
                        num = bin.padStart(16, '0');
                        mostrar(num);
                    } else if (line.slice(1, line.length) == line.slice(1, line.length).toLowerCase()) { //Para variables tipo @variable, comprobamos que no sea una etiqueta
                        if (variables.has(line.slice(1, line.length))) { //Si la variable ya existe
                            let num = variables.get(line.slice(1, line.length));
                            mostrar(num);
                        } else { //Si la variable no existe
                            let num = cont_variables;
                            cont_variables++;
                            let bin = num.toString(2);
                            num = bin.padStart(16, '0');
                            variables.set(line.slice(1, line.length), num);
                            mostrar(num);
                        }
                    } else { //Para las tipo @ETIQUETA
                        let num = etiquetas.get(line.slice(1, line.length));
                        mostrar(num);
                    }
                }else{ // Para instrucciones tipo comp;jump o dest=comp;jump
                    let comp_code = '';
                    let dest_code = '';
                    let jump_code = '';
                    let parts = line.split('=');
                    if (parts.length == 2) {
                        dest_code = dest[parts[0]];
                        parts = parts[1].split(';');
                        comp_code = comp[parts[0]];
                        jump_code = jump[parts[1]];
                    } else {
                        parts = line.split(';');
                        dest_code = dest['undefined'];
                        comp_code = comp[parts[0]];
                        jump_code = jump[parts[1]];
                    }
                    mostrar('111' + comp_code + dest_code + jump_code);
                }
            }
        });
    }

    reader.readAsText(this.files[0]);

})

