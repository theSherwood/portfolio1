import React from "react";
import App, { Container } from "next/app";
import Header from "../components/header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <style global jsx>{`
          body {
            margin: 0;
            box-sizing: border-box;
          }
        `}</style>
        <section>
          <Component {...pageProps} />
        </section>
      </Container>
    );
  }
}

export default MyApp;
