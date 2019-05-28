import Link from "next/link";

function Index() {
  return (
    <main>
      <style jsx>{`
        main {
          min-height: 100vh;
        }

        #image-container {
          position: fixed;
          left: -20%;
          top: -20%;
          height: 140%;
          width: 140%;
          background: url("/static/mi-1.jpg") center center no-repeat;
          background-size: cover;
          -webkit-filter: blur(2px);
          -moz-filter: blur(2px);
          -o-filter: blur(2px);
          -ms-filter: blur(2px);
          z-index: -1;
        }

        #image-container:after {
          content: "";
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.95) 30%,
            rgba(255, 255, 255, 0.4) 100%
          );
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .page-content {
          box-sizing: border-box;
          padding: 8px;
          padding-top: 80px;
          min-height: 100vh;
          z-index: 1;
        }
      `}</style>
      <div id="image-container" />
      <section className="page-content">
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
