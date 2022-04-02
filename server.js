const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "홍길동",
            "birthday": "1986.02.18",
            "gender": "남자",
            "job": "대학생"
        },
        {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "마우개",
            "birthday": "1988.11.20",
            "gender": "남자",
            "job": "프로그래머"
        },
        {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "강백호",
            "birthday": "1990.04.04",
            "gender": "남자",
            "job": "디자이너"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));