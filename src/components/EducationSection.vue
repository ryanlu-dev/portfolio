<template>
  <section>
    <div class="content-container">
      <div class="left-container">
        <h1>Education</h1>
        <div class="image-container">
          <img id="UF-lg" src="/GatorHead.png" alt="A picture of the University of Florida Gator logo">
        </div>
      </div>
      <div class="text-container">
        <h2 class="uni-lg">
          <b>University of Florida (2020 - 2024)</b>
        </h2>
        <h2 class="uni-sm">
          <b>University of Florida<br>(2020 - 2024)</b>
        </h2>
        <div class="image-container">
          <img id="UF-sm" src="/GatorHead.png" alt="A picture of the University of Florida Gator logo">
        </div>
        <p>
          I graduated cum laude (3.71 GPA) with a Bachelor of Science in Computer Science and a minor in Music Performance. Some standout courses I had taken include Data Structures and Algorithms, Operating Systems, Computer Networking, and Software Engineering.
        </p>
        <p>
          In fall semesters, I performed with the UF Pride of the Sunshine Marching Band. I served as a section leader for the baritones and later became a drum major for the entire ensemble. In the spring, I was a member of the UF Symphonic Band or Concert Band and played the euphonium.
        </p>
        <p>
          In Fall 2021, I was initiated into the Alpha Eta Chapter of Kappa Kappa Psi, National Honorary Band Service Fraternity. I was an active member for every semester until I graduated. I served as the chapter's webmaster for several semesters and sat on multiple committees to serve the band program at UF.
        </p>
      </div>
      <div class="image-container">
        <img id="DrumMajor" src="/DrumMajor.jpg" alt="A picture of me conducting the UF Pride of the Sunshine Marching Band">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  .content-container {
    .left-container {
      width: 184px;

      h1 {
        text-align: left;
        margin-left: 1rem;
        width: 99px;
      }

      .image-container {
        text-align: center;

        #UF-lg {
          margin: auto;
          display: flex;
          height: 50%;
          width: 99px;
          border-radius: 5px;
          margin-top: 2.2rem;
          object-fit: cover;
        }
      }
    }

    .text-container {
      .uni-sm {
        display: none;
      }

      .uni-lg {
        display: block;
      }

      .image-container {
        text-align: center;

        #UF-sm {
          display: none;
        }
      }
    }

    .image-container {
      #DrumMajor {
        object-fit: cover;
        width: 9rem;
        height: 10rem;
        border-radius: 5px;
        box-shadow: 2px 3px 5px -5px;
        object-position: 30%;
        margin-top: 10rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  section {
    .content-container {
      h1 {
        margin-left: 0px;
        margin-right: 0px;
      }

      .left-container {
        h1 {
          text-align: center;
          margin-left: 0rem;
          width: 100%;
        }

        .image-container {
          #UF-lg {
            display: none;
          }
        }
      }

      .text-container {
        .uni-sm {
          display: block;
        }

        .uni-lg {
          display: none;
        }

        .image-container {
          #UF-sm {
            margin: auto;
            display: flex;
            height: 30%;
            width: 50%;
            border-radius: 5px;
            margin-top: 1rem;
          }
        }
      }

      .image-container {
        #DrumMajor {
          object-fit: cover;
          width: 90%;
          height: 100%;
          border-radius: 5px;
          box-shadow: 2px 3px 5px -5px;
          object-position: 30%;
          margin-top: 0rem;
        }
      }
    }
  }
}
</style>
