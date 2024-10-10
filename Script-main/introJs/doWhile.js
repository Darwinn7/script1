let user, userName
user ="paco"

do{
    userName=prompt("digite usuario")
    if(user === userName){
        console.log(`bienvenido ${user}`)
    }else{
        console.log(`tu no eres ${user}... eres ${userName} impostor😉😉`)
    }
}while(user !== userName)

    