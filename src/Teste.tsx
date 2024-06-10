/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  fontSize: ${(props) => props.fontSize || '18px'}
`
const BotaoPerigo = styled(Botao)`
background-color: red;
color: #fff;

span{
text-decoration: line-through;

}

`

function Teste() {
  return (
    <>
    <Botao principal>Enviar</Botao>
    <Botao fontSize='24px' principal={false}>Cancelar</Botao>
    <BotaoPerigo as="a" principal><span>Nao clique</span></BotaoPerigo>
    </>
  )
}

export default Teste
