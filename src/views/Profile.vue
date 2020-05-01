<template>
  <div id="profile-page">
    <div class="container-fluid" style="background-color: #f3f3f3;min-height: 100vh;">
      <div class="row" id="header">
        <div class="col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto" id="pictureholder">
          <div id="displayPicture" :style="{ "background-image": "url("+getImages()+")" }"></div>
        </div>
        <div class="col-12 col-sm-12 col-md-auto" id="info">
          <h2>{{data.fname + ' ' + data.lname}}</h2>
          <p class="info-stats">
            26, Male, Jamaica
            <br />
          </p>
          <div
            class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2"
            style="margin-left: -10px; box-shadow: 2px 2px 2px gray;width: 220px"
          >
            <LikeButton></LikeButton>
            <div class="badge badge-danger px-3 rounded-pill font-weight-normal">Message</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"
          style="margin: 40px 0px;padding-left: 50px;"
        >
          <h3>Photos</h3>
          <div class="row fbox3">
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Nature"
                href="../assets/hero-background-nature.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-nature.jpg"
                  alt="Hero Image Nature"
                />
              </a>
            </div>
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Technology"
                href="../assets/hero-background-technology.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-technology.jpg"
                  alt="Hero Image Technology"
                />
              </a>
            </div>
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Travel"
                href="../assets/hero-background-travel.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-travel.jpg"
                  alt="Hero Image Travel"
                />
              </a>
            </div>
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Food"
                href="../assets/hero-background-food.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-food.jpg"
                  alt="Hero Image Food"
                />
              </a>
            </div>
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Music"
                href="../assets/hero-background-music.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-music.jpg"
                  alt="Hero Image Music"
                />
              </a>
            </div>
            <div class="col-sm-4 d-flex justify-content-center align-items-center">
              <a
                data-fancybox="gallery"
                data-caption="Hero Image Photography"
                href="../assets/hero-background-photography.jpg"
              >
                <img
                  class="img-fluid"
                  src="../assets/hero-background-photography.jpg"
                  alt="Hero Image Photography"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9" style="margin: 30px 0;">
          <div id="info-panel">
            <div>
              <h3>
                Summary
                <br />
              </h3>
              <p>{{data.description}}</p>
              <div class="mt-5">
                <h3>
                  Lifestyle
                  <br />
                </h3>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td class="heading-col">Interests</td>
                        <td>Billiards, Dogs, Cats, Antiques, Decorating</td>
                      </tr>
                      <tr>
                        <td>
                          Looking for
                          <br />
                        </td>
                        <td>Serious Relationshiop, Just friends</td>
                      </tr>
                      <tr>
                        <td>
                          Smoking
                          <br />
                        </td>
                        <td>Never</td>
                      </tr>
                      <tr>
                        <td>
                          Language
                          <br />
                        </td>
                        <td>English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-5">
                <h3>
                  Physical
                  <br />
                </h3>
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td class="heading-col">Height</td>
                        <td>5'10</td>
                      </tr>
                      <tr>
                        <td>
                          Body Type
                          <br />
                        </td>
                        <td>Average</td>
                      </tr>
                      <tr>
                        <td>
                          Hair Color
                          <br />
                        </td>
                        <td>Black</td>
                      </tr>
                      <tr>
                        <td>
                          Eye Color
                          <br />
                        </td>
                        <td>Brown</td>
                      </tr>
                      <tr>
                        <td>
                          Ethnicity
                          <br />
                        </td>
                        <td>Jamaican</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    login: Boolean,
    ext: Object
  },
  data() {
    return {
      data: {}
    };
  },
  beforeMount() {
    this.checkLogin();

    let id = this.$route.query.id || this.ext.user.id;

    this.axios
      .get(this.ext.baseUrl + id)
      .then(data => {
        this.data = data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getImages: function() {
      let id = this.$route.query.id;

      try {
        return require("../assets/dp/th-0" + id + ".jpg");
      } catch (e) {
        return require("../assets/dp/th-01.jpg");
      }
    },
    checkLogin: function() {
      if (!localStorage.getItem("userId")) {
        this.$router.push("/");
      }
    }
  }
};
</script>