import React from 'react'
import PropTypes from 'prop-types'

import {BotaoDetalhes} from './BotaoDetalhes.jsx'

const FilmesCadastrados = (props) => {
  let conteudo

  if (props.titulos === undefined || props.titulos.length === 0) {
    conteudo =
        <div className="notification is-warning">
          Não há filmes cadastrados.
        </div>
  } else {
    conteudo =
        montaTabela(props.titulos, props.idFilmeSelecionado, props.quandoSelecionado)
  }

  return (
    <div className="message is-info">
      <div className="message-header">
        <p>Filmes Cadastrados</p>
      </div>
      <div className="message-body">
        <div className="box">
          {conteudo}
        </div>
      </div>
    </div>
  )
}

// monta a tabela com os títulos dos filmes
function montaTabela (titulos, idFilmeSelecionado, quandoSelecionado) {
  let tabela =
    <table className="table is-striped is-hoverable is-fullwidth">
      <tbody>
        {titulos.map(idTitulo => montaLinha(idFilmeSelecionado, idTitulo, quandoSelecionado))}
      </tbody>
    </table>

  return tabela
}

// monta uma linha contendo o título do filme
function montaLinha (idFilmeSelecionado, idTitulo, quandoSelecionado) {
  let linha =
      <tr key={idTitulo.id}>
        <td>{idTitulo.titulo}</td>
        <td>
          {montaBotao(idFilmeSelecionado, idTitulo.id, quandoSelecionado)}
        </td>
      </tr>

  return linha
}

// monta o botão detalhes da linha
function montaBotao (idFilmeSelecionado, idFilme, quandoSelecionado) {
  let botao
  // FIXME : Bug! Botão só deve ser exibido para filme não selecionado.
  // fix feito, mas tá tosco 😬
    botao =
        <BotaoDetalhes
          id={idFilme}
          quandoClicado={quandoSelecionado}
          filmeSelecionado={idFilmeSelecionado}
        />

  return botao
}


FilmesCadastrados.propTypes = {
  titulos: PropTypes.array,
  idFilmeSelecionado: PropTypes.number,
  quandoSelecionado: PropTypes.func
}

export {FilmesCadastrados}
