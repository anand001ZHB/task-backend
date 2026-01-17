import express from 'express';
const app = express();

app.use(express.json());

app.get('/health', (req, resp) => {
    resp.send('Hello Anand, How are you?');
});

app.post('/echo', (req, resp) => {
    resp.json(req.body);
});

export default app