*{
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  
  body {
    overflow-x: hidden;
    background-color:  #142032;
  }
  
  .book{
    color:  white;
    background-color: #2c2c2c;
    text-align: center;
    padding: 1rem;
    border-radius: 1px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
  }
  
  .Livrarias{
    .menu-icon {
        display: none;
        font-size: 28px;
        cursor: pointer;
    }
    
    /* Menu ativo */
    .links ul.active {
        display: block;
    }
  
  }
  
  
  .ul-img{
  
    height: 60px;
    max-width: 100px;
    gap: 40px;
    align-items: center;
    display: flex;
    transform: scale(0.5);
  
  }
  
  .text{
    color: white;
    padding: 11rem;
    font-size: 50px;
    display: block;
    width: 1rem;
    margin: 19px;
    height: 9rem;
  }
  
  .img{
    position: relative;
    top: -20rem; 
    display: block;
    padding-left: 30rem; 
    display: flexbox;
    gap: 20px;
    align-items: center;
    display: flex;
    max-width: 100%;
    height: auto;
   
  }
  .seletores a{
    width: 100vw;
    height: 60px;
    gap: 46px;
    display: flex;
    text-align: center;
    color: white;
    margin: -17rem;
    text-decoration: none;
    margin-left: -58rem; 
    transition: transform 0.3s ease, color 0.9s ease;
    font-size: 23px;
  }
  
  .seletores a:hover {
    transform: translatex(-5px);
    transform: translatey(-2px);
    color: white;
  }
  
  .tema1{
  
    color: white;
    text-align: center;
    padding: 2rem;
  }
  
  .galeria-livros {
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
    padding: 4rem 2rem;
  }
  
  .livro {
    cursor: pointer;
    background-color: #1f1f1f;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 200px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
  }
  
  .livro:hover {
    transform: scale(1.05);
  }
  
  .livro img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .info-livro {
    margin-top: 1rem;
    color: white;
  }
  
  .preco-antigo {
    text-decoration: line-through;
    color: #888;
    font-size: 14px;
  }
  
  .preco-novo {
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  
  .livro button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .livro button:hover {
    background-color: hsl(0, 100%, 40%);
  }
  
  .tema2{
    color: white;
    text-align: center;
    padding: 2rem;
  }
  
  .tema3{
    text-align: center;
    color: white;
    padding: 2rem;
  }
  
  /* Estilos para o rodapé */
  footer {
    background-color: #1e1e1e;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .footer-section {
    width: 17%;
    padding: 1rem;
  }
  
  .footer-section h2, .footer-section h3 {
    margin-bottom: 1px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: -0rem 0;
  }
  
  .footer-section ul li a {
    color: #bbb;
    text-decoration: none;
    font-size: 13px;
  }
  
  .footer-section ul li a:hover {
    color: #f39c12;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 10px;  
    font-size: 14px; 
    background-color: #333;
    padding: 5px 0;  
  }
  
  .footer-bottom p {
    margin: 0;
    color: #ccc;
  }
  
  #carrinho {
    display: none;
    position: fixed;
    right: 20px;
    bottom: 80px;
    background-color: white;
    padding: 1em;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 1000;
  }
  
  
  #carrinho {
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: #1e1e1e;
    color: white;
    padding: 1rem;
    border-radius: 8px;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
  }
  
  #carrinho h3 {
    margin-bottom: 0.5rem;
  }
  
  .item-carrinho {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #444;
    padding-bottom: 0.3rem;
  }
  
  .item-carrinho button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }
  
  #abrir-carrinho {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #f39c12;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1001;
  }
  
  #mensagem-agradecimento {
    display: none;
    background-color: #f0f8ff;
    border: 2px solid #4caf50;
    border-radius: 12px;
    padding: 20px;
    margin: 30px auto;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    animation: fadeIn 1s ease-in-out;
  }
  
  #mensagem-agradecimento h3 {
    color: #2e7d32;
    margin-bottom: 10px;
    font-size: 24px;
  }
  
  #mensagem-agradecimento p {
    color: #333;
    font-size: 16px;
  }
  
  @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }
  #btn-finalizar {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 20px;
  }
  
  #btn-finalizar:hover {
    background-color: #388e3c;
    transform: scale(1.05);
  }
  
  #btn-finalizar:active {
    background-color: #2e7d32;
    transform: scale(0.98);
  }
  