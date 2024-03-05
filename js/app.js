let quantidadeTotalDoTipo = 0;
let quantidadeDoIngresso;

function comprar(){
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;
    quantidadeDoIngresso = document.getElementById('qtd').value;

    ingressosDisponiveis(tipoDoIngresso);

    if (tipoDoIngresso == 'pista'){
        comprarPista(quantidadeDoIngresso);
    } else if (tipoDoIngresso == 'superior'){
        comprarSuperior(quantidadeDoIngresso);
    } else if (tipoDoIngresso == 'inferior'){
        comprarInferior(quantidadeDoIngresso);
    }
}

function ingressosDisponiveis(tipoDoIngresso){
    let ingressosDisponiveis = parseInt(document.getElementById(`qtd-${tipoDoIngresso}`).textContent);

    if(ingressosDisponiveis < quantidadeDoIngresso){
        alert(`Sinto muito! Não há disponibilidade dessa quantidade de ingressos do tipo '${tipoDoIngresso}' no momento`)
    }
}

function comprarPista(quantidadeDoIngresso){
    let quantidadeDoIngressoPista = parseInt(document.getElementById('qtd-pista').textContent);

    while (quantidadeDoIngressoPista > 0){
        quantidadeTotalDoTipo = quantidadeDoIngressoPista - quantidadeDoIngresso;
        quantidadeDoIngressoPista = quantidadeTotalDoTipo;  
        break;
    }

    document.getElementById('qtd-pista').innerHTML = quantidadeDoIngressoPista;
}

function comprarSuperior(quantidadeDoIngresso){
    let quantidadeDoIngressoSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    while (quantidadeDoIngressoSuperior > 0){
        quantidadeTotalDoTipo = quantidadeDoIngressoSuperior - quantidadeDoIngresso;
        quantidadeDoIngressoSuperior = quantidadeTotalDoTipo;  
        break;
    }

    document.getElementById('qtd-superior').innerHTML = quantidadeDoIngressoSuperior;
}

function comprarInferior(quantidadeDoIngresso){
    let quantidadeDoIngressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    while (quantidadeDoIngressoInferior > 0){
        quantidadeTotalDoTipo = quantidadeDoIngressoInferior - quantidadeDoIngresso;
        quantidadeDoIngressoInferior = quantidadeTotalDoTipo;  
        break;
    }

    document.getElementById('qtd-inferior').innerHTML = quantidadeDoIngressoInferior;
}