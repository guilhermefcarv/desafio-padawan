
var TMDB_ENDPOIN_ENDPOINT = 'https://jsonplaceholder.typicode.com/';
var albumsPrefix =  'albums';
var todosPrefix =  'todos';
var postsPrefix =  'posts';

$(() =>{    
    $.get(TMDB_ENDPOIN_ENDPOINT + todosPrefix).then((data)=>{
        $("#tabelaToDo").html(""); 
        $("#tabelaToDo").append(`
        <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
              </tr>
        </thead>
        <tbody>
        `)
        for (let i = 0; i < data.length; i++){
            let userId = data[i].userId;
            let id = data[i].id;
            let title = data[i].title;
            let completed = data[i].completed;
            $("#tabelaToDo").append(`
            <tr>
              <th>${userId}</th>
              <th>${id}</th>
              <th>${title}y</th>
              <th>${completed}y</th>
            </tr>
            `)//Insirir html da tabela lá dentro
        }
        $("#tabelaToDo").append(`
            </tbody>
            `)
    })
})

