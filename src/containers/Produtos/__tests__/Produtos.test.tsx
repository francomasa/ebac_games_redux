import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Elden Ring'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
    preco: 199.9,
    precoAntigo: 299.9,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 3,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['PS5', 'Xbox Series S/X'],
    preco: 150,
    precoAntigo: 200,
    titulo: 'Gotham Knights'
  },
  {
    id: 4,
    categoria: 'Aventura',
    imagem: '',
    plataformas: ['Nintendo Switch'],
    preco: 189.9,
    precoAntigo: 299.9,
    titulo: 'Donkey Kong'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregando', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    renderizaComProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('Donkey Kong')).toBeInTheDocument()
    })
  })
})

// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
// import { screen, waitFor } from '@testing-library/dom'

// import Produtos from '..'
// import { renderizaComProvider } from '../../../utils/tests'

// const mocks = [
//   {
//     id: 1,
//     categoria: 'RPG',
//     imagem: '',
//     plataformas: ['Windows'],
//     preco: 150.9,
//     precoAntigo: 199.9,
//     titulo: 'Elden Ring'
//   },
//   {
//     id: 2,
//     categoria: 'RPG',
//     imagem: '',
//     plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
//     preco: 199.9,
//     precoAntigo: 299.9,
//     titulo: 'Hogwarts Legacy'
//   },
//   {
//     id: 3,
//     categoria: 'Ação',
//     imagem: '',
//     plataformas: ['PS5', 'Xbox Series S/X'],
//     preco: 150,
//     precoAntigo: 200,
//     titulo: 'Gotham Knights'
//   },
//   {
//     id: 4,
//     categoria: 'Aventura',
//     imagem: '',
//     plataformas: ['Nintento Switch'],
//     preco: 189.9,
//     precoAntigo: 299.9,
//     titulo: 'Donkey Kong'
//   }
// ]

// const server = setupServer(
//   rest.get(
//     'http://localhost4000/produtos',
//     (_requisisao, resposta, contexto) => {
//       // requisisao: todo o que envio ao servedor
//       // resposta: e a resposta que vamos devolver
//       // contexto: a traves dele que vamos a construir a resposta
//       return resposta(contexto.json(mocks))
//     }
//   )
// )

// describe('Teste para o container orodutos', () => {
//   beforeAll(() => server.listen())
//   afterEach(() => server.resetHandlers())
//   afterAll(() => server.close())

//   test('Deve renderizar corretamente com o texto de Carregando', () => {
//     renderizaComProvider(<Produtos />)
//     expect(screen.getByText('Carregando...')).toBeInTheDocument()
//   })

//   test('Deve renderizar corretamente com a listagem de jogos', async () => {
//     const { debug } = renderizaComProvider(<Produtos />)
//     await waitFor(() => {
//       debug()
//       expect(screen.getByText('Donkey Kong')).toBeInTheDocument()
//     })
//   })
// })
