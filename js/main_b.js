'use strict';

// sivulla on p elementti 'message', jossa olisi tarkoitus näyttää palvelimen vastaus
// valitse se, ja tallenna muuttujaan

// tee funktio 'upload', joka
// - estää lomakkeen lähetyksen
// - kirjoittaa 'message' elementtiin 'Upload in progress...'
// - hakee lomakkeesta file kentän
// - tekee FormData -olion ja lisää käyttäjän valitseman tiedoston siihen
// - lähettää tiedoston fetch -metodilla osoitteeseen 'upload.php'
// - kun tiedoston lähetys on valmis, kirjoittaa palvelimen vastauksen 'message' elementtiin

// tee tapahtumakuuntelija, joka kutsuu 'upload' funktiota, kun lomake lähetetään

//------------------------------------------------------------------------------------------------


/*const laheta = document.querySelector('submit');

laheta.addEventListener('click', (evt) => {
  evt.preventDefault();
  //vaihda modalin luokka lightboxista hiddeniin
  p.replace('tiedostoa lähetetään');

}
*/
const message = document.querySelector('#message');
//console.log(message);
const upload = (evt) => {
  evt.preventDefault();
  message.innerText="Upload in progress...";

  const input = document.querySelector('input[type="file"]');

  const data = new FormData();

  data.append('fileToUpload', input.files[0]);

  const settings = {
    method: 'POST',
    body: data
  };

  fetch('upload.php', settings).then((response) => {
    return response.text();
  }).then((text) => {
   // console.log(text);
    message.innerText=text;
  });





};

const laheta = document.querySelector('form');
laheta.addEventListener('submit', upload);




/*
  // tehdään FormData -objekti
  const data = new FormData();
  // lisätään tiedosto FormData -objektiin.
  // Huomaa että files on taulukko. Voit siis lähettää useampia tiedostoja.
  data.append('fileToUpload', input.files[0]);
  // tehdään olio asetuksille
  const settings = {
    method: 'POST',
    body: data
  };
  // käynnistetään fetch. Tässä tapauksessa palvelin kertoo
  // uploudin onnistumisen/epäonnistumisen tekstillä. Voi olla myös esim json.
  fetch('upload.php', ).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
  });

*/

//----------------ESIMERKKI!:------------------------------------------------------

/*
// valitaan sivulta input-kenttä, jonka tyyppi on file
const input = document.querySelector('input[type="file"]');
// tehdään FormData -objekti
const data = new FormData();
// lisätään tiedosto FormData -objektiin.
// Huomaa että files on taulukko. Voit siis lähettää useampia tiedostoja.
data.append('fileToUpload', input.files[0]);
// tehdään olio asetuksille
const settings = {
  method: 'POST',
  body: data
};
// käynnistetään fetch. Tässä tapauksessa palvelin kertoo
// uploudin onnistumisen/epäonnistumisen tekstillä. Voi olla myös esim json.
fetch('upload.php', settings).then((response) => {
  return response.text();
}).then((text) => {
  console.log(text);
});

*/