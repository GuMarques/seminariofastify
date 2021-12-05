const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-mongodb'), {
  forceClose: true,
  
  url: `mongodb+srv://admin:fastifyweb2@clusterseminariofastify.kuhnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
})

fastify.register(require('fastify-formbody'))

fastify.register(require('fastify-nextjs'))
.after(() => {
  fastify.next('/cadastro')
  fastify.next('/consulta')
})

fastify.get('/user', async function (req, res) {
  try {
    const users = await this.mongo.db.collection('users').find({}).toArray();
    res.send(users);
  } catch (error) {
    res.send(error);
  }

})

fastify.post('/user', function (req, res) {
  
  const users = this.mongo.db.collection('users');

  const {nome, senha} = req.body;

  const user = {
    nome,
    senha
  }

  users.insertOne(user)
  .then(() => {
    res.redirect('/cadastro')
  })
  .catch(error => {
    res.send(error);
  })
})

fastify.get('/', async (req, res) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()