<template>
  <div id="home-page">
    <div id="box-2" class="d-flex flex-column justify-content-center">
      <h1 id="heading1">DISCOVER CONTAGIOUS LOVE</h1>
      <router-link to="/login">
        <button class="btn btn-primary" id="discoverButton" type="button">
          <img
            style="width: 20px;height: 20px;transform: rotate(270deg) translateX(2px);"
            src="../assets/arrowwhite.gif"
          />
          <span>
            <strong>DISCOVER</strong>
          </span>
          <img
            style="width: 20px;height: 20px;transform: rotate(90deg) translateX(-2px);"
            src="../assets/arrowwhite.gif"
          />
        </button>
      </router-link>
    </div>

    <div id="newest">
      <h1 class="text-center mt-5" style="text-shadow: 2px 2px 4px #269d9d;">Newest Members</h1>
      <CardHolder class="mb-5"></CardHolder>
    </div>

    <div id="parallax-container">
      <div class="parallax">
        <video class="parallax-background" loop muted autoplay>
          <source src="../assets/banner.mp4" type="video/mp4" />
        </video>
        <div
          class="container-fluid d-flex justify-content-center align-items-center parallax-content"
          style="position: absolute; background: none; top: 0; height: 100%"
        >
          <div class="col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-column">
            <h1>Sign Up Now</h1>
            <p>+One is the best site to discover the experience you are truly looking for.</p>
            <div class="row">
              <div class="col d-flex justify-content-center">
                <router-link to="/login">
                  <button class="btn btn-primary" id="discoverButton" type="button">
                    <img
                      style="width: 20px;height: 20px;transform: rotate(270deg) translateX(2px);"
                      src="../assets/arrowwhite.gif"
                    />
                    <span>
                      <strong>DISCOVER</strong>
                    </span>
                    <img
                      style="width: 20px;height: 20px;transform: rotate(90deg) translateX(-2px);"
                      src="../assets/arrowwhite.gif"
                    />
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
