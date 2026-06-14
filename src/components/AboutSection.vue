<template>
  <section>
    <div class="content-container">
      <div class="left-container">
        <h1>About Me</h1>
        <div class="image-container">
          <img id="Ryan" src="/Ryan.jpg" alt="A picture of Ryan Lu">
        </div>
      </div>
      <div class="text-container">
        <p>Hi, I'm Ryan. I love programming, gaming, music, and my cat!</p>
        <p>I'm experienced in C++, Java, C#, Python, React, Vue, and more — I love learning about new languages and frameworks. My main goal as a software engineer is to contribute to a project and team where I'm truly valued and I know I'm doing impactful work.</p>
        <p>I have many years of experience as a leader in my time performing in marching bands and within service organizations, which I believe sets me apart as someone who understands what it means to work in a team and how to communicate effectively.</p>
        <p>
          I'm always looking for new opportunities to learn and grow as a developer and as a person. Feel free to reach out to me via email at
          <span
            class="tooltip-trigger"
            data-tooltip="I do this so I don't get spam from robots!"
          >"(my first name) [at] (my full name) [dot] dev"</span>
          or <a href="https://www.linkedin.com/in/-ryan-lu-" style="color: orangered">connect with me on LinkedIn!</a>
        </p>
      </div>
      <div class="image-container">
        <img id="MJ" src="/MJ.jpg" alt="A picture of Ryan's cat, MJ!">
      </div>
    </div>
  </section>
  <hr>
</template>

<style scoped lang="scss">
section {
  .content-container {
    h1 {
      margin-left: 1.5rem;
    }

    .image-container {
      #Ryan {
        height: 15rem;
        width: 7rem;
        border-radius: 5px;
        box-shadow: 2px 3px 5px -5px;
        margin-top: 1.5rem;
        object-fit: cover;
        margin-left: -1rem;
      }

      #MJ {
        height: 10rem;
        width: 11rem;
        border-radius: 5px;
        box-shadow: 2px 3px 5px -5px;
        vertical-align: middle;
        margin-top: 50%;
        margin-right: -1rem;
        object-fit: cover;
      }
    }
  }

  .tooltip-trigger {
    position: relative;
    cursor: help;
    text-decoration: underline dotted orangered;

    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: calc(100% + 0.4rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: #2F314A;
      color: #EDF2F4;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      border: 1px solid orangered;
      white-space: nowrap;
      font-size: 0.85rem;
      font-weight: 400;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s;
      z-index: 10;
    }

    &:hover::after {
      opacity: 1;
    }
  }
}

@media only screen and (max-width: 768px) {
  section {
    .content-container {
      h1 {
        margin-left: 0px;
      }

      .image-container {
        #Ryan {
          height: 20rem;
          width: 15rem;
          max-width: 95%;
          border-radius: 5px;
          box-shadow: 2px 3px 5px -5px;
          margin-top: 1.5rem;
          object-fit: cover;
        }

        #MJ {
          height: 20rem;
          width: 22rem;
          max-width: 95%;
          border-radius: 5px;
          box-shadow: 2px 3px 5px -5px;
          vertical-align: middle;
          margin-top: 0.5rem;
          margin-right: 0rem;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
