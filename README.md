# proyecto6apirest

Mi primer proyecto de Node, Express y MongoDB en Rock{theCode}, ¡prepárate para crear tu primer servidor!, lo he realizado de Saint Seiya! 
----
My first Node, Express and MongoDB project at Rock{theCode}, get ready to create your first server, was made from Saint Seiya! 

-
De la carpeta Controllers:

* Archivo saints.js: Voy a nombrar los endpoints. 

get('/', getSaints): Obtiene todos los santos.
get('/:id', getSaintById): Obtiene un santo específico por su ID.
get('/categoria/:categoria', getSaintByCategory): Obtiene todos los santos de una categoría específica.
get('/poder/:poder', getSaintByPower): Obtiene todos los santos con un poder específico.
post('/', postSaint): Crea un nuevo santo.
put('/:id', putSaint): Actualiza la información de un santo existente por su ID.
delete('/:id', deleteSaint): Elimina un santo por su ID.

--
From the Controllers folder:

* File saints.js: I'm going to list the endpoints that I have included in the file and what each one does."

get('/', getSaints): Retrieves all saints.
get('/:id', getSaintById): Retrieves a specific saint by its ID.
get('/categoria/:categoria', getSaintByCategory): Retrieves all saints of a specific category.
get('/poder/:poder', getSaintByPower): Retrieves all saints with a specific power.
post('/', postSaint): Creates a new saint.
put('/:id', putSaint): Updates information of an existing saint by its ID.
delete('/:id', deleteSaint): Deletes a saint by its ID.

-----------------
De la Carpeta Controllers:

* Archivo taizen.js: voy a nombrar los endpoints.
  
get('/:id', getTaizenById): Obtiene los detalles de un Taizen específico por su ID.
get('/', getTaizen):  Obtiene una lista de todos los Taizen.
post('/', postTaizen): Crea un nuevo Taizen.
put('/:id', putTaizen):  Actualiza la información de un Taizen existente por su ID.
delete('/:id', deleteTaizen): Elimina un Taizen por su ID.

--

From the Controllers folder:

File taizen.js: I'm going to name the endpoints.
get('/:id', getTaizenById): Retrieves the details of a specific Taizen by its ID.
get('/', getTaizen): Retrieves a list of all Taizen.
post('/', postTaizen): Creates a new Taizen.
put('/:id', putTaizen): Updates the information of an existing Taizen by its ID.
delete('/:id', deleteTaizen): Deletes a Taizen by its ID.


 
