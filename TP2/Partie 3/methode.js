lireJson(){
  fetch('http://localhost:8080/JSON/output.json')
  .then(function(response) {
    if (!response.ok) {
      console.log('Mauvaise réponse du réseau');
    }
    return response.json();
  })
  .then(function(json) {
    //traiter le json
  })
  .catch(function(error){
    console.log('Problème avec l\'opération fetch: ' + error.message);
  })
}
