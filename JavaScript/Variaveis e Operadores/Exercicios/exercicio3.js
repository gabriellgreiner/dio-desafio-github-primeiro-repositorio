/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, conssiderando o preo normal de etiqueta e a escolha de condição de pagamento.
        Utilize os códigos de tabela a seguir para ler qual a condição de pagamento e efetuar o cálculo adequado.

        Código Condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        - Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
        */
       const precoEtiqueta = 220;
       const formaDePagamento = 14;

       if (formaDePagamento === 1) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.4));
       } else if (formaDePagamento ===3) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.68));
       } else if (formaDePagamento === 5) {
        console.log(precoEtiqueta);
       } else {
        console.log(precoEtiqueta + (precoEtiqueta * 0.03));
       }
