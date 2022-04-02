// este script é o exemplo 1 para chamar ou capturar email e senha 
// e capturar dados vindos do servidor ou outra liguagem - 


let email = 'vitor_jackson1992@hotmail.com'
email = 'vitor_jackson8888@hotmail.com'


console.log(email);
console.log('O seu email é '+ email);
console.log(`O seu email é: ${email}`);

/* importante - addeventlistener     use = document.getElementById    - exemplo sempre que quiser criar alguma interação tipo, se o usuario clica neste botão faça isso, se o usuario, digitar enter faça isso.... terá que criar um ID lá no html dar um nome, e passar o nome aqui no script. veja o exemplo  */





document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('o botão foi clicado');
});
//este acima é evento de quando o usuario clica no botão





document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('Omouse esta sobre o formulário');
});
//este é quando o usuario passa o mouse em cima do formulário vc pode usar js com css ///para criar efeitos - neste caso usamos 2 exemplo com o metodo get element abaixo temos outra opção





document.querySelector('#form-login').addEventListener('mouseleave', e => {
        console.log('o mouse esta fora');
});
//Pelo query selector - o query usará o padrão do css / pode usar seletor descendente filho etc ( o que muda é que no query usa o # no começo, no get n usa nada)





/*document.querySelector('#form-login').addEventListener('submit', e =>  {
    e.preventDefault();
    console.log('Formulário enviado! aqui vai o Ajax');
})
*/
// neste código foi adicionado o prevent defalt para tirar o 
// erro de enviar e não ir para lugar nenhum - digite qualquer email e senha e veja a mensagem


document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email, password);

});
         // essa ultima captura a senha formulário






 //------------------------------------------------------------------------------

  
  //Jason serve como um (jason - javascript object notation) interpretador intermediario


 
    /*

    let JSON = {
        email : "vitor_rodrigues20@hotmail.com"
    };
     
   console.log(JSON);
   */

 // outro modo de fazer abaixo
 // o primeiro email é propriedade o segundo é variavel


    let json = {
        email,
        password 
    
   };


    console.log(json);

    let stringJSON = JSON.stringify(json);

   console.log(stringJSON);

   // agora para receber o dados  em outra linguagem ou servidor

   let jasonParse = JSON.parse(stringJSON);
   console.log(jasonParse);  

   //  console.log(jasonParse.password)  ou console.log(jasonParse.email)




