import { screen } from '@testing-library/react';
import Header from '..';
import { renderizaComProvider } from '../../../utils/tests';

describe(`Teste para o componente header`, () => {
  test(`Deve renderizar corretamente`, () => {
    renderizaComProvider(<Header />);
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test(`Deve renderizar com 2 itens no carrinho`, () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: {
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'XBOX Series S/X'],
              preco: 150.90,
              precoAntigo: 199,90,
              titulo: "Elden Ring"
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 199.90,
              precoAntigo: 299,90,
              titulo: "Hogwarts Legacy"
            }
          }
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
