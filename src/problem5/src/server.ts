import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/database';
import resourceRoutes from './routes/resource.routes';
import { errorHandler } from './middlewares/error.middleware';
import { ErrorRequestHandler } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/resources', resourceRoutes);

app.use(errorHandler as ErrorRequestHandler);

AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

export default app;