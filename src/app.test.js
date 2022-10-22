const request = require("supertest");
const app = require("./app");
const Calculadora =require("./models/Calculadora");




  

  describe("Testes operações Model", () => {


    test("Testando método ADIÇÃO da model - numérico", async () =>{

      const resultadoSoma = await Calculadora.soma(2,5);
      expect(resultadoSoma).toBe(7)


    })


    test("Testando método SUBTRAÇÃO da model - numérico", async () =>{

      const resultadoSubtracao = await Calculadora.subtracao(10,4);
      expect(resultadoSubtracao).toBe(6)


    })

    test("Testando método MULTIPLICAÇÂO da model - numérico", async () =>{

      const resultadoMultiplicacao = await Calculadora.multiplicacao(10,4);
      expect(resultadoMultiplicacao).toBe(40)


    })

    test("Testando método DIVISÃO da model - numérico", async () =>{

      const resultadoDaDivisao = await Calculadora.divisao(12,4);
      expect(resultadoDaDivisao).toBe(3)


    })


   /*
    test("Testando método soma da model - string ", async () =>{

      const resultadoSoma = await Calculadora.soma("a","b");
      console.log(resultadoSoma)
      expect(resultadoSoma.Error.message).toBe("Digite apenas números")
 

    })
    */
    
    



  }
  
    );

    
  describe("Teste Rotas Controller",()=>{

    test("Teste rota SOMA",async () =>{

      const res = await request(app).get("/soma").query([1,2]);
      expect(res.statusCode).toBe(200);
      expect(res.body.erro).toBe(false);
      expect(res.body.ResultadoDaSoma).toBe(3);

    })

    test("Teste rota SUBTRACAO",async () =>{

      const res = await request(app).get("/subtracao").query([8,2]);
      expect(res.statusCode).toBe(200);
      expect(res.body.erro).toBe(false);
      expect(res.body.ResultadoDaSubtracao).toBe(6);

    })

    test("Teste rota MULTIPLICACAO",async () =>{

      const res = await request(app).get("/multiplicacao").query([6,2]);
      expect(res.statusCode).toBe(200);
      expect(res.body.erro).toBe(false);
      expect(res.body.ResultadoDaMultiplicacao).toBe(12);

    })
    test("Teste rota DIVISAO",async () =>{

      const res = await request(app).get("/divisao").query([10,2]);
      expect(res.statusCode).toBe(200);
      expect(res.body.erro).toBe(false);
      expect(res.body.ResultadoDaDivisao).toBe(5);

    })






  })



