
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.port || 3001;

app.use(cors());
app.use(express.json())

const data = {
    users: [
        {
            id: 1,
            userName: 'useremail@email.com',
            password: 'password1',
            token: 'test123'
        }
    ]
}

app.use('/user/login', (req, res) => {
    if (req.body.email === data.users[0].email && req.body.password === data.users[0].password) {
        res.send({
            token: data.users[0].token
        });
    } else {
        res.status(400)
    }

});

app.listen(3001, () => console.log('API is running on port ' + PORT));
