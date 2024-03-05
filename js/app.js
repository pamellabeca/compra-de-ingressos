let quantidadeTotalDoTipo = 0;

function comprar(){
    let tipoDoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDoIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoDoIngresso == 'pista'){
        comprarPista(quantidadeDoIngresso, tipoDoIngresso);
    } else if (tipoDoIngresso == 'superior'){
        comprarSuperior(quantidadeDoIngresso, tipoDoIngresso);
    } else if (tipoDoIngresso == 'inferior'){
        comprarInferior(quantidadeDoIngresso, tipoDoIngresso);
    }

    limparCampo();
}

function limparCampo(){
    document.getElementById('qtd').value = '';
}

function comprarPista(quantidadeDoIngresso, tipoDoIngresso){
    let quantidadeDoIngressoPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeDoIngresso > quantidadeDoIngressoPista){
        alert(`Sinto muito! Não há disponibilidade dessa quantidade de ingressos do tipo '${tipoDoIngresso}' no momento`)
    } else{
        quantidadeDoIngressoPista = quantidadeDoIngressoPista - quantidadeDoIngresso;
        document.getElementById('qtd-pista').innerHTML = quantidadeDoIngressoPista;
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(quantidadeDoIngresso, tipoDoIngresso){
    let quantidadeDoIngressoSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidadeDoIngresso > quantidadeDoIngressoSuperior){
        alert(`Sinto muito! Não há disponibilidade dessa quantidade de ingressos do tipo '${tipoDoIngresso}' no momento`)
    } else{
        quantidadeDoIngressoSuperior = quantidadeDoIngressoSuperior - quantidadeDoIngresso;
        document.getElementById('qtd-superior').innerHTML = quantidadeDoIngressoSuperior;
        alert('Compra realizada com sucesso!')
    }
}

function comprarInferior(quantidadeDoIngresso, tipoDoIngresso){
    let quantidadeDoIngressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeDoIngresso > quantidadeDoIngressoInferior){
        alert(`Sinto muito! Não há disponibilidade dessa quantidade de ingressos do tipo '${tipoDoIngresso}' no momento`)
    } else{
        quantidadeDoIngressoInferior = quantidadeDoIngressoInferior - quantidadeDoIngresso; 
        document.getElementById('qtd-inferior').innerHTML = quantidadeDoIngressoInferior;
        alert('Compra realizada com sucesso!')
    }
}