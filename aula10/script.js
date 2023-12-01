let permisao; 

switch (permisao) {
    case "comum":
        console.log("Você é um usuário comum")
        break;
    case "adm":
        console.log("Você é um Adm")
        break;
    case "deus":
        console.log("Você é um Deus")
        break; 
    
    default:
        console.log("Usuário não reconhecido !")
}