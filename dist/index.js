import express from 'express';
import userRouter from './routes/user.route.js';
import propertyRouter from './routes/property.route.js';
const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.use('/property', propertyRouter);
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
//# sourceMappingURL=index.js.map