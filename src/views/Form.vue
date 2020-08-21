<template>
<body>
  <div id="app">
    <div>
      <br />
      <br />
      <section class="hero is-default is-bold">
        <!-- <div class="hero-head">

        </div>-->
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-2">
                <figure class="is-4by3">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
                    alt="Description"
                  />
                </figure>
              </div>
              <div class="column is-6 is-offset-1">
                <h1 class="title is-2">Solicitud de trámites</h1>
                <br />
                <p>
                  ¡Hola!, en esta sección podrás realizar los trámites escolares que necesites, solamente debes seleccionar el trámite, llenar los requerimientos y darle al botón de solicitar,
                  <b>¡Así de fácil!</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section is-main-section form1">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-ballot default"></i>
              </span> Trámites
            </p>
            <!---->
          </header>
          <div class="card-content">
            <form>
                <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Solicitud</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <!---->
                    <div class="control">
                      <span class="select is-empty">
                        <select required="required">
                          <option disabled selected class="first" hidden="hidden" value>Selecciona un trámite</option>
                          <option value="constancia">Constancia de estudios</option>
                          <option value="Marketing">Horario</option>
                          <option value="Sales">Seguimiento académico</option>
                        </select>
                      </span>
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <!---->
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-ballot-outline default"></i>
              </span> Custom elements
            </p>
            <!---->
          </header>
          <div class="card-content">
            <div class="field has-check is-horizontal">
              <div class="field-label">
                <label class="label">Checkbox</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <!---->
                  <div class="field is-grouped-multiline is-grouped">
                    <!---->
                    <div class="control">
                      <label class="b-checkbox checkbox">
                        <input type="checkbox" true-value="true" value="lorem" />
                        <span class="check is-primary"></span>
                        <span class="control-label">Lorem</span>
                      </label>
                    </div>
                    <div class="control">
                      <label class="b-checkbox checkbox">
                        <input type="checkbox" true-value="true" value="ipsum" />
                        <span class="check is-primary"></span>
                        <span class="control-label">Ipsum</span>
                      </label>
                    </div>
                    <div class="control">
                      <label class="b-checkbox checkbox">
                        <input type="checkbox" true-value="true" value="dolore" />
                        <span class="check is-primary"></span>
                        <span class="control-label">Dolore</span>
                      </label>
                    </div>
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <!---->
            </div>
            <hr />
            <div class="field has-check is-horizontal">
              <div class="field-label">
                <label class="label">Radio</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <!---->
                  <div class="field is-grouped-multiline is-grouped">
                    <!---->
                    <div class="control">
                      <label class="b-radio radio">
                        <input type="radio" value="one" />
                        <span class="check"></span>
                        <span class="control-label">One</span>
                      </label>
                    </div>
                    <div class="control">
                      <label class="b-radio radio">
                        <input type="radio" value="two" />
                        <span class="check"></span>
                        <span class="control-label">Two</span>
                      </label>
                    </div>
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <!---->
            </div>
            <hr />
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Switch</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <!---->
                  <label class="switch is-rounded">
                    <input type="checkbox" true-value="true" value="false" />
                    <span class="check"></span>
                    <span class="control-label">Default</span>
                  </label>
                  <!---->
                </div>
              </div>
              <!---->
            </div>
            <hr />
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">File</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <!---->
                  <div class="field file">
                    <!---->
                    <label class="upload control">
                      <a class="button is-primary">
                        <span class="icon">
                          <i class="mdi mdi-upload default"></i>
                        </span>
                        <span>Pick a file</span>
                      </a>
                      <input type="file" />
                    </label>
                    <!---->
                    <!---->
                  </div>
                  <!---->
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</body>
</template>

<script>
!(function () {
  var e = document,
    t = e.createElement("script");
  if (!("noModule" in t) && "onbeforeload" in t) {
    var n = !1;
    e.addEventListener(
      "beforeload",
      function (e) {
        if (e.target === t) n = !0;
        else if (!e.target.hasAttribute("nomodule") || !n) return;
        e.preventDefault();
      },
      !0
    ),
      (t.type = "module"),
      (t.src = "."),
      e.head.appendChild(t),
      t.remove();
  }
})();
</script>

<style scoped>
.form1 {
  margin-top: -18vh;
}
</style>