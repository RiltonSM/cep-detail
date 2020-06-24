# cep-detail
> Pacote desenvolvido em JavaScript que realiza pesquisa de detalhes do CEP e busca de CEP através de endereço.

## Instalação

```sh
npm install cep-detail
```

## Usando

Após instalar o pacote, realize a importação dele no arquivo em que desejar utilizar os serviços do pacote. Veja formas de fazer isso:

```javascript
import cep from 'cep-detail';

async function getCepInfo() {
    const details = await cep.getCepDetail('números_do_cep_como_string');
    const number = await cep.getCepNumber('sigla_da_UF', 'nome_da_cidade', 'nome_do_logradouro')
}

```

Ou

```javascript
import { getCepDetail, getCepNumber } from 'cpf-authenticator';

async function getCepInfo() {
    const details = await getCepDetail('números_do_cep_como_string');
    const number = await getCepNumber('sigla_da_UF', 'nome_da_cidade', 'nome_do_logradouro')
}
```

O retorno da função getCEpDetail será um objeto com a seguinte estrutura:
```javascript
retorno = [{
    bairro: "nome_do_bairro",
    cep: "número_do_cep",
    complemento: "complemento_caso_houver",
    gia: "gia_caso_houver",
    ibge: "número_ibge",
    localidade: "nome_da_cidade",
    logradouro: "nome_do_logradouro",
    uf: "sigla_da_uf",
    unidade: "número_da_unidade_caso_houver",
}]
```
A função getCepNumber retornará um array de objetos, cada objeto terá a seguinte estrutura:
```javascript
retorno = [{
    bairro: "nome_do_bairro",
    cep: "número_do_cep",
    complemento: "complemento_caso_houver",
    gia: "gia_caso_houver",
    ibge: "número_ibge",
    localidade: "nome_da_cidade",
    logradouro: "nome_do_logradouro",
    uf: "sigla_da_uf",
    unidade: "número_da_unidade_caso_houver",
},{
    bairro: "nome_do_bairro",
    cep: "número_do_cep",
    complemento: "complemento_caso_houver",
    gia: "gia_caso_houver",
    ibge: "número_ibge",
    localidade: "nome_da_cidade",
    logradouro: "nome_do_logradouro",
    uf: "sigla_da_uf",
    unidade: "número_da_unidade_caso_houver",
},{
    ...
}]
```
Note que caso o logradouro possuir mais de um CEP, esta função retornará um conjunto dos possíveis CEPs.  

## Configuração para Desenvolvimento

Para fazer a instalação das dependências, baixe os arquivos que compõe o projeto. Será necessário ter o NodeJS instalado na sua máquina. No terminal, acesse a pasta em que os arquivos estão e digite o seguinte código:

```sh
npm install
```

Será feito a instalação de todas as dependências do projeto.

## Histórico de lançamentos
* 1.0.3
    * Adição do README.md.
    * Correção de bug no retorno da função getCepDetail.
* 1.0.2
    * Versão inicial.

## Meta

Rilton Moreira – rilton_moreira@hotmail.com


## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/RiltonSM/cep-detail/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_
