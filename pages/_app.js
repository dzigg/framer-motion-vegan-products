import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles.scss";

// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
