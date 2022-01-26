import styles from "./Home.module.css"
import "./Home.css"
function Home() {
  return (
    <>
      <section className={styles.body}>
        <h1 className={styles.home}> المتحف الوطني السعودي ..</h1>
        <p className={styles.paragraph}>
          هو متحف وطني ضخم في المملكة العربية السعودية. فُتح في 1999، ويقع في الجزء الشرقي من مركز الملك عبد العزيز
          التاريخي في الرياض . <br /> يتكون المتحف من ثمان قاعات عرض، مقسمة بحسب موضوعات تطور شبه الجزيرة العربية
          الطبيعي، والإنساني، والثقافي، والسياسي، والديني .<br /> حسب سيناريو العرض المتحفي، وصولا إلى تطور السعودية
          بأطوارها الثلاثة .
        </p>
      </section>

      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
            </figure>

            <button>Book</button>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Image 2"
              />
              <figcaption>Légende</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="image-2"
              />
            </figure>

            <button>Book</button>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Brohm Lake"
              />
            </figure>

            <button>Book</button>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://abubakersaeed.netlify.app/designs/d4-flip-card"
        class="abs-site-link"
        rel="nofollow noreferrer"
        target="_blank"
      >
        abs/designs/d4-flip-card
      </a>




    </>
  )
}

export default Home
