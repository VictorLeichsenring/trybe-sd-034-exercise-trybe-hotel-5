const crypto = require('crypto');
const format = require('date-fns/format');

function gerarSenhaManifestante(codigo) {
    const dataFormatada = format(new Date(), 'yyyyMMdd');
    return crypto.createHash('md5').update(codigo + dataFormatada).digest('hex');
}

function criarXMLConsultaProcesso(idManifestante, codigo, numeroProcesso) {
    const senhaManifestante = gerarSenhaManifestante(codigo);

    const xml = `
        <tipoConsultarProcesso xmlns="http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2">
            <idManifestante>${idManifestante}</idManifestante>
            <senhaManifestante>${senhaManifestante}</senhaManifestante>
            <numeroProcesso>${numeroProcesso}</numeroProcesso>
            <!-- Incluir outros elementos conforme necessário -->
        </tipoConsultarProcesso>
    `;

    return xml;
}

// Exemplo de uso
const idManifestante = 'PIX';
const codigo = '674995';
const numeroProcesso = '0029003-24.2020.8.16.0019'; // Exemplo de número do processo
const xmlRequisicao = criarXMLConsultaProcesso(idManifestante, codigo, numeroProcesso);

console.log(xmlRequisicao);
