const Cadastro = () => {
  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="wrap d-md-flex">
                <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div class="text w-100">
                    <h2>Ver Usuários Cadastrados</h2>
                    <a href="/consulta" class="btn btn-white btn-outline-white">
                      Veja Agora
                    </a>
                  </div>
                </div>
                <div class="login-wrap p-4 p-lg-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Cadastro</h3>
                    </div>
                  </div>
                  <form action="/user" method="post" class="signin-form">
                    <div class="form-group mb-3">
                      <label class="label" for="name">
                        Nome
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nome"
                        name="nome"
                        required
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">
                        Senha
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Senha"
                        name="senha"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary submit px-3"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Cadastro;
