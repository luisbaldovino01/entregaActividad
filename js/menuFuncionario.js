function menuFuncionario() {
    fetch('https://v2.jokeapi.dev/joke/Spooky,Christmas')
      .then(response => response.json())
      .then(data => {
        var joke = data.setup + ' ' + data.delivery;
        document.body.innerHTML += '<p>' + joke + '</p>';
      })
      .catch(error => {
        console.log('Error al obtener la broma:', error);
      });
  }
  
  menuFuncionario();