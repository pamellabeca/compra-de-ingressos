let quantidadeTotalDoTipo = 0;
let quantidadeDoIngresso;

function comprar(){
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDoIngressoPista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeDoIngressoSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeDoIngressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    quantidadeDoIngresso = document.getElementById('qtd').value;

    ingressosDisponiveis(tipoDoIngresso);

    while (quantidadeDoIngressoPista > 0){
        if (tipoDoIngresso == 'pista'){
            quantidadeTotalDoTipo = quantidadeDoIngressoPista - quantidadeDoIngresso;
            quantidadeDoIngressoPista = quantidadeTotalDoTipo;  
        }
        break;
    }

    document.getElementById('qtd-pista').innerHTML = quantidadeDoIngressoPista;

    while (quantidadeDoIngressoSuperior > 0){
        if (tipoDoIngresso == 'superior'){
            quantidadeTotalDoTipo = quantidadeDoIngressoSuperior - quantidadeDoIngresso;
            quantidadeDoIngressoSuperior = quantidadeTotalDoTipo;  
        }
        break;
    }

    document.getElementById('qtd-superior').innerHTML = quantidadeDoIngressoSuperior;

    while (quantidadeDoIngressoInferior > 0){
        if (tipoDoIngresso == 'inferior'){
            quantidadeTotalDoTipo = quantidadeDoIngressoInferior - quantidadeDoIngresso;
            quantidadeDoIngressoInferior = quantidadeTotalDoTipo;  
        }
        break;
    }

    document.getElementById('qtd-inferior').innerHTML = quantidadeDoIngressoInferior;
}

function ingressosDisponiveis(tipoDoIngresso){
    let ingressosDisponiveis = parseInt(document.getElementById(`qtd-${tipoDoIngresso}`).textContent);

    if(ingressosDisponiveis < quantidadeDoIngresso){
        alert(`Sinto muito! Não há disponibilidade dessa quantidade de ingressos do tipo '${tipoDoIngresso}' no momento`)
    }
}