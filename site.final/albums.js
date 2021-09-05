
var TMDB_ENDPOIN_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
var albumsPrefix = 'albums';
var todosPrefix = 'todos';
var postsPrefix = 'posts';

$(() => {
  $.get(TMDB_ENDPOIN_ENDPOINT + albumsPrefix).then((data) => {
    $("#tabelaAlbums").html("");
    $("#tabelaAlbums").append(`
    <thead>
      <tr>
      <th scope="col">UserID</th>
       <th scope="col">ID</th>
       <th scope="col">Title</th>
      </tr>
    </thead>
     <tbody>
    `)
    for (let i = 0; i < data.length; i++) {
      let userId = data[i].userId;
      let id = data[i].id;
      let title = data[i].title;
      $("#tabelaAlbums").append(`
           
            <tr>
              <th>${userId}</th>
              <th>${id}</th>
              <th>${title}</th>
            </tr>
         
            `)//Insirir html da tabela lá dentro
    }
    $("#tabelaAlbums").append(`
            </tbody>
            `)
  })
})