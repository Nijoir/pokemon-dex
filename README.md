# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More About The Proyect

**Hola aca estara un poco de las decisiones técnicas para el desarrollo de la aplicación**

Bueno comenzando por usar el MUI para ya tener componentes preparados para su implementacion y no estar haciendo uso de demasiado css para los estilos.

Decidí ir dividiendo los componentes para poder tener un orden entorno a todo lo renderizado, pero al momento de hacer el deploy de la aplicación sucedia un error, este error era que no

obtenia el `modulo` de GridCards.js, siendo que ya esta importado. Dejo la [Imágen](https://prnt.sc/0xmpphvp800m).

Entonces tome la decisión de pasar todo el render a el componente `GridList.js` para poder hacer uso del deploy, de cualquier manera en el codigo deje el componente de `GridCards.js`

para ver si ustedes podian darme algun feedback sobre este error para en algun futuro poder solucionarlo.

Siguiendo con el deploy preferi en primera instacia usar `Heroku` para el deploy porque era una herramienta que conocia para los deploy, pero luego de hacer el deploy exitoso la aplicación hizo un 

crash y empeze a buscar distintas alternativas hasta que llegue a `Vercel`.

En las vistas puse los buscadores por nombre e ID del pokemon junto a la paginación, ya que si la paginación se encontraba al final de la lista de `Cards`, el usuario podia tener problemas a quizas

no encontrar la paginación ya que esta abajo, asi teniendolo al principio el usuario ya sabe que las `Cards` estan paginadas. Tambien es para que en un futuro caso si se quisieran mostrar

mas de 20 pokemons, el usuario no tenga que bajar al final para cambiar de pagina.

En las cartas decidí mostrar tanto el tipo de pokemon es, mas sus estadisticas base para cada uno de ellos.

**Cosas que se puedan mejorar en siguientes iteraciones**

1) Que al momento de bajar al final de la lista tenga un boton para poder volver al principio de la pagina, para que el usuario no tenga que subir por el.
2) Agregar unos filtros sobre los tipos de pokemon para tener un buscador para posibles armados de equipos de pokemon.
3) Agregar una 2da capa a las cartas para mostrar movimientos o descripción de cada pokemon.