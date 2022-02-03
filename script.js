function contar()   {
    let inp1 = document.getElementById("inp1")
    let inp2 = document.getElementById("inp2")
    let inp3 = document.getElementById("inp3")
    let resp = document.getElementById("res")
    if  ( !inp1.value.length || !inp2.value.length || !inp3.value.length )   {
        alert("[ERRO] Preencha todos os dados e tente novamente!")
    } else  {
        resp.innerHTML = "Calculando: "
        let ip1 = Number(inp1.value)
        let ip2 = Number(inp2.value)
        let ip3 = Number(inp3.value)
        if (ip3 <= 0)   {
            alert("Passo inválido! Considerando Passo com valor 1!")
            ip3 = 1
        }
        if (ip1 < ip2)  {
            //Contagem crescente.
            for (let c = ip1; c <= ip2; c += ip3) { 
            resp.innerHTML += ` ${c} \u{1F4CD}`
        } 
    } else {
            //Contagem regressiva.
            for (let c = ip1; c >= ip2; c -= ip3)   {   
                resp.innerHTML += ` ${c} \u{1F4CD}`
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}
        
