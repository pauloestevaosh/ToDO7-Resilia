class Calculadora {

    static async soma(numero1, numero2) {

        
        //return numero1 + numero2;



        if (Number(numero1)!=numero1 ||Number(numero2)!=numero2 ) {

            throw new Error ( "Digite apenas números");

        }
        else{
            
            return numero1 + numero2;
            
        }

    }

    static async subtracao(numero1, numero2) {

        if (Number(numero1)!==numero1 ||Number(numero2)!==numero2 ) {

            throw new Error ( "Digite apenas números");

        }
        else{
        return numero1 - numero2;
        }
    }

    static async multiplicacao(numero1, numero2) {

        if (Number(numero1)!==numero1 ||Number(numero2)!==numero2 ) {

            throw new Error ( "Digite apenas números");

        }
        else{
        return numero1 * numero2;
        }
    }

    static async divisao(numero1, numero2) {
        
        if (numero2 == 0) {
            
            throw new Error ( "Não é possível dividir por zero");
           
        }
        else {
            if (Number(numero1)!==numero1 ||Number(numero2)!==numero2 ) {

                throw new Error ( "Digite apenas números");
    
            }
            else{

            return numero1 / numero2;
            }
        }
    }


  /*  static async divisao(numero1, numero2) {
        if (numero2 = 0)
            return "Não é possível dividir por zero"
        else
            return numero1 / numero2;
    }
*/

}

module.exports = Calculadora;