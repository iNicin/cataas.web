
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Home } from "./index";

jest.mock("axios");

describe("Home Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders Home component correctly", async () => {
    const { getByLabelText, getByText } = render(<Home />);

    // Simula a seleção de um tipo de gato no formulário
    fireEvent.change(getByLabelText("Select a type of cat"), { target: { value: "cute" } });
    
    // Simula a entrada de texto no formulário
    fireEvent.change(getByLabelText("What’s the cat saying?"), { target: { value: "Hello, kitty!" } });

    // Simula o clique no botão de geração de imagem
    fireEvent.click(getByText("Search"));

    // Aguarda o carregamento da imagem
    await waitFor(() => expect(getByText("Download")).toBeInTheDocument());

    // Restante da lógica do teste...
  });

  // Adicione mais testes conforme necessário para cobrir outros cenários
});
