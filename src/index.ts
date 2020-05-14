import express from 'express';
import cors from 'cors';
import routes from 	'./routes';

// Inferência de tipos: é um conceito do TypeScript
// que quer dizer que o TypeScript na grande maioria das vezes
// vai conseguir determinar de forma automática 
// o tipo de variável e o tipo de retorno de funções po exemplo 

const app = express();

app.use(cors());
app.use(routes);

app.listen(3333);