const fastify = require('fastify')({ logger: true })
const join = require('path').join;
const createError = require('fastify-error')
const userInsertError = createError('USER_INSERT_ERROR', 'User was not inserted')
const userGetError = createError('USER_GET_ERROR', 'Users could not be listed')


fastify.register(require('fastify-mongodb'), {
  forceClose: true,
  
  url: `mongodb+srv://<user>:<passoword>@clusterseminariofastify.kuhnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
})

fastify.register(require('fastify-formbody'))

fastify.register(require('fastify-nextjs'))
.after(() => {
  fastify.next('/cadastro')
  fastify.next('/consulta')
})

fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars"),
    templates: join(__dirname, 'view/'),
  },
});

fastify.get('/user', async function (req, res) {
  try {
    const users = await this.mongo.db.collection('users').find({}).toArray();
    res.send(users);
  } catch (error) {
    console.log(new userGetError())
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
    console.log(new userInsertError());
    res.send(error);
  })
})

fastify.get('/', async (req, res) => {
  return { hello: 'world' }
})

fastify.get('/test', (req, reply) => {
  reply.view('view/test', { title: 'usando Handlebars no Fastify', text: "Point of View" })
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
