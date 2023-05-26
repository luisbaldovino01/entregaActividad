function menuAdministrativo() {
    fetch('https://v2.jokeapi.dev/joke/Misc,Programming')
      .then(response => response.json())
      .then(data => {
        var joke = data.setup + ' ' + data.delivery;
        document.body.innerHTML += '<p>' + joke + '</p>';
      })
      .catch(error => {
        console.log('Error al obtener la broma:', error);
      });
  }

  menuAdministrativo();