import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import path from 'path';
import clientRoutes from  './routes/clientRoutes';
import groomerRoutes from './routes/groomerRoutes';
import petRoutes from './routes/petRoutes';
import appointmentRoutes from './routes/appointmentRoutes'
import { db } from './models';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

const cors = require('cors');

app.use(cors());

app.use('/api/client', clientRoutes);
app.use('/api/groomer', groomerRoutes);
app.use('/api/pet', petRoutes);
app.use('/api/appointment', appointmentRoutes)


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});


db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3000);