const Calculadora =require("../models/Calculadora");

class CalculadoraController {

    static async    soma(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map(numero =>{
           
          

        return Number(numero);

        })

       

        console.log("conversao: ", converteNumero);
       

        const soma = await Calculadora.soma(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
               ResultadoDaSoma: soma,
                erro: false,

        });

        console.log("teste do que aparece aqui de valores : " , await Calculadora.soma(2,3))

    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: erro.message, erro:true});

        }


    }
    
    }



    static async    subtracao(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map(numero =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const subtracao = await Calculadora.subtracao(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
           ResultadoDaSubtracao: subtracao,
                erro: false,

        });
    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: erro.message, erro:true});

        }


    }
    
    }


    static async    multiplicacao(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map(numero =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const  multiplicacao = await Calculadora.multiplicacao(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
           ResultadoDaMultiplicacao:  multiplicacao,
                erro: false,

        });
    } catch (erro){
        if(erro){
            res.status(400).json({mensagem: erro.message, erro:true});

        }


    }
    
    }


    static async divisao(req,res){

        try{
        const query = req.query;
        console.log("query: ",query);
        
        const values = Object.values(query);
        console.log("values: ",values);
        const converteNumero =values.map(numero =>{

        return Number(numero);

        })

        console.log("conversao: ", converteNumero);

        const  divisao = await Calculadora.divisao(converteNumero[0],converteNumero[1]);
        // const soma = Calculadora.soma(...converteNumero);
        res.status(200).json ({
           ResultadoDaDivisao:  divisao,
                erro: false,

        });
    } catch (erro){
        if(erro){
            
            res.status(400).json({mensagem: erro.message, erro:true});
        }


    }
    
    }






}

module.exports = CalculadoraController