<h1 align="center"> API REST TODOLIST </h1>


[![Node.js CI](https://github.com/ClaudioMartinH/4.1-Claudio-Martin/actions/workflows/main.yml/badge.svg)](https://github.com/ClaudioMartinH/4.1-Claudio-Martin/actions/workflows/main.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ClaudioMartinH/4.1-Claudio-Martin)
![GitHub forks](https://img.shields.io/github/forks/ClaudioMartinH/4.1-Claudio-Martin)
[![GitHub release](https://img.shields.io/github/release/ClaudioMartinH/4.1-Claudio-Martin.svg)](https://github.com/ClaudioMartinH/4.1-Claudio-Martin/releases)


<h3 align="center">Esta entrega trata de desarrollar y probar una API REST con Arquitectura Hexagonal.</h3>

> [!NOTE]
>  Para comenzar, hay que bajarse el repositorio de Github:
> https://github.com/ClaudioMartinH/4.1-Claudio-Martin.git

> [!IMPORTANT]
> Hay que tener instalado
> ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
> ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

> [!TIP]
> Una vez tengamos el editor de codigo abierto en la carpeta que contiene el repositorio, podemos ejecutar los siguientes comandos:
> * npm install   => para instalar dependencias
> * npm run build => para transpilar el código de Typescript a Javascript
> * npm start     => para iniciar el servidor y ejecutar las comprobaciones
> * npm run test  => para ejecutar la suite de test del repositorio



* Se ha adjuntado la documentación de los tests realizados a los endpoints de la API en el archivo ***./postman/Pruebas TodoAPI REST.postman_test_run.json***
* Para autenticarse en la API aquí van las credenciales

usuario: admin  
contraseña: password123  


<h4>Las rutas de la API son las siguientes:</h4>

> [!IMPORTANT]
> En toda peticion hay que autenticarse con las credenciales anteriormente mencionadas (usuario y contraseña)

<h5>Para crear un usuario: POST  *** localhost:3000/api/users ***</h5>
<h5>Para crear una tarea: POST *** localhost:3000/api/tasks ***</h5>
  Para crearla debemos incluir en el body un objeto JSON con las propiedades "id" seguido de un numero,
  y la propiedad "title" seguida del titulo de la tarea. Por defecto se guardara como no completada  
<h5>Para recuperar las tareas guardadas: GET  *** localhost:3000/api/tasks ***</h5>
<h5>Para recuperar una tarea por id: GET *** localhost:3000/api/tasks/:id ***</h5>
  Para recuperar una tarea por id hay que introducir en el endpoint (../tasks/:id) en numero de tarea
<h5>Para marcar como completada una tarea: PATCH *** localhost:3000/api/tasks/:id ***</h5>
<h5>Para editar una tarea: PUT *** localhost:3000/api/tasks/:id ***</h5>
  Para editarla primero hay que introducir en el endpoint (../tasks/:id) en numero de tarea que queremos editar,  
  y seguidamente debemos incluir en el body un objeto JSON con las     
  propiedades "id" seguido de un numero, y la propiedad "title" seguida del titulo de la tarea.  
  Por defecto se guardara como no completada (false)
<h5>Para eliminar una tarea: DELETE *** localhost:3000/api/tasks/:id ***</h5>
 Hay que incluir en el endpoint (../tasks/:id) el numero de tarea que queremos eliminar


