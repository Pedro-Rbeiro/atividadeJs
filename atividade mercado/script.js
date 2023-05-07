function comprar() {
  const item1 = document.getElementById("produtos-limpeza").value;
  const item2 = document.getElementById("graos-cereais").value;
  const item3 = document.getElementById("massas").value;
  const item4 = document.getElementById("cachaca").value;
  const item5 = document.getElementById("refrigerantes").value;
  let produtos = [];
  let liProdutos = ``;
  const carrinho = document.getElementById("compras-carrinho");
  let valorTotal = 0.0;
  switch (item1) {
    case "1":
      produtos.push("Detergente");
      valorTotal += 3.4;
      break;
    case "2":
      produtos.push("Desinfetante");
      valorTotal += 9.9;
      break;
    case "3":
      produtos.push("Água Sanitaria");
      valorTotal += 18.75;
      break;
    default:
      break;
  }
  switch (item2) {
    case "1":
      produtos.push("Arroz");
      valorTotal += 18.7;
      break;
    case "2":
      produtos.push("Feijão");
      valorTotal += 9.39;
      break;
    case "3":
      produtos.push("Pipoca");
      valorTotal += 8.85;
      break;
    default:
      break;
  }
  switch (item3) {
    case "1":
      produtos.push("Miojo");
      valorTotal += 2.35;
      break;
    case "2":
      produtos.push("Macarrão");
      valorTotal += 4.55;
      break;
    case "3":
      produtos.push("Massa de lasanha");
      valorTotal += 11.69;
      break;
    default:
      break;
  }
  switch (item4) {
    case "1":
      produtos.push("Velho barreiro");
      valorTotal += 17.25;
      break;
    case "2":
      produtos.push("51");
      valorTotal += 10.9;
      break;
    case "3":
      produtos.push("Pitu");
      valorTotal += 20.26;
      break;
    default:
      break;
  }
  switch (item5) {
    case "1":
      produtos.push("Simba");
      valorTotal += 2.4;
      break;
    case "2":
      produtos.push("Coca cola");
      valorTotal += 8.99;
      break;
    case "3":
      produtos.push("Sprite");
      valorTotal += 7.85;
      break;
    default:
      break;
  }
  for (let i = 0; i < produtos.length; i++) {
    liProdutos += `<li> ${produtos[i]}</li>`;
  }
  if (valorTotal > 0) {
    taxaValor = valorTotal * 0.1;
    carrinho.innerHTML = `
    <p>Produtos: <ol> ${liProdutos}</ol></p>
    <div class="valor-total"
    <p>Valor total: <strong>R$${valorTotal.toFixed(2)}</strong></p>
    <p>Valor que será pago ao vendedor<br>(10% do valor total): <strong>R$${taxaValor.toFixed(
      2
    )}</strong></p>
    </valor-total>
`;
  } else {
    alert("Insira pelo menos um produto para comprar!");
    return;
  }
}
function cancelar() {
  const item1 = document.getElementById("produtos-limpeza");
  const item2 = document.getElementById("graos-cereais");
  const item3 = document.getElementById("massas");
  const item4 = document.getElementById("cachaca");
  const item5 = document.getElementById("refrigerantes");
  item1.value = "0";
  item2.value = "0";
  item3.value = "0";
  item4.value = "0";
  item5.value = "0";
}
