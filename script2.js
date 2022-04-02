//
//

let email = 'vitor_jackson1992@hotmail.com'
email = 'vitor_jackson8888@hotmail.com'


console.log(email);
console.log('O seu email é '+ email);
console.log(`O seu email é: ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('o botão foi clicado');
});


document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse esta sobre o formulário');
});


document.querySelector('#form-login').addEventListener('mouseleave', e => {
        console.log('o mouse esta fora');
});


document.querySelector('#form-login').addEventListener('submit', e =>  {
    e.preventDefault();
    console.log('Formulário enviado! aqui vai o Ajax');
})

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email, password);

// IMPORTANTE QUANDO SE COLOCA (!json.email)  ! = se não tem nada dentro faça =
// !== (simal de diferente /  esse sinal significa vazio    ""   )   

//  se json.email for diferente de vazio então faça
//  if (json.email !== "")

});
    
   
   let json = {
        email,
        password 
    
   };

   if (!json.email) {
    
    console.error("o campo deve ser preenchido");


   } else if (!json.password) {

    console.error("O campo deve ser preenchido!");

   } else {

    console.info("Dados");
   };



    

