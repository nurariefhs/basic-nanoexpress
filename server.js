import nanoexpress from 'nanoexpress';

const app = nanoexpress();

app.get('/', (req, res) => {
    return res.send({status: 'OK'})
})

app.listen(4000);