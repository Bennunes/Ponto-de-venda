const table = document.getElementsByTagName('table');
let id = 0;

let carrinho = [
    { cod: 1, 
      nome: 'camera', 
      valor: 599.99, 
      img: 'imagem/camera.jpg' },
    { cod: 2, 
      nome: 'celular', 
      valor: 999.99, 
      img: 'imagem/celular.jpg' },
    { cod: 3, 
      nome: 'monitor', 
      valor: 1000, 
      img: '' }

];
const novaVenda = () => {
    let btn = document.createElement('button');
    let getBtn = document.getElementsByClassName('buttons')[0];
  
    getBtn.innerHTML += '<button onclick = "" id = "fecha" >Fechar Venda</button>';
    getBtn.innerHTML += '<button onclick = "" id = "cancela">Cancelar</button>';

}
const selecionaItem = (produtos) =>{
    let opt = document.getElementById('selecao');
    //console.log(carrinho);
    produtos.map(e => {
        opt.innerHTML += `<option data-id = "${e.cod}" data-valor = "${e.valor}" data-img = "${e.img}">${e.nome}</option>`
    });
}
selecionaItem(carrinho);

const itemEscolhido = () => {
  
    let produto    = document.getElementById('selecao');
    let quantidade = document.getElementById('qtde');  
  
  
}
const addItem = (prod) => {
  
    let lista = document.getElementById('lista');
    
    lista.innerHTML += `<tr data-id = "${prod.cod}">
                    <td>${prod.nome}</td>
                    <td>${prod.img}</td>
                    <td>${prod.qtd}</td>
                    <td>${prod.valor}</td>
                    <td>${prod.total}</td>
                    </tr>`;  
    
}
/*const removeItem = () => {
    let li = document.getElementsByTagName('li');
    ul.removeChild(li[li.length - 1]); 
    id--;      
}
const removeItemSelecionado = (id) => {
    if(confirm('Deseja excluir o item?')){
        let li = document.getElementById(id);
        ul.removeChild(li);
        id--;
    }
}
*/