const Consulta = ({ users }) => {
  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last fullwidth">
                <div class="text w-100">
                  <h2>Usuários Cadastrados</h2>
                  {users.map((user) => (
                    <li class="text-left">
                      <p>
                        <b>Nome:</b> {user.nome} <b>- Senha:</b> {user.senha}
                      </p>
                    </li>
                  ))}
                  <a href="/cadastro" class="btn btn-white btn-outline-white">
                    Voltar
                  </a>
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

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/user");
  const users = await res.json();

  return {
    props: {
      users: users,
    },
  };
}

export default Consulta;
