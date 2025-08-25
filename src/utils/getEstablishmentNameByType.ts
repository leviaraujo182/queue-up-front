export function getEstablishmentNameByType(type: number): string {
  const names: { [key: number]: string } = {
    0: "Restaurante",
    1: "Bar",
    2: "Café",
    3: "Padaria",
    4: "Lanchonete",
    5: "Pizzaria",
    6: "Farmácia",
    7: "Laboratório",
    8: "Clínica",
    9: "Hospital",
    10: "Banco",
    11: "Cartório",
    12: "Mercado",
    13: "Lotérica",
    14: "Pet Shop",
    15: "Outro",
  };

  return names[type] ?? "Desconhecido";
}
