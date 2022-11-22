import React from "react";
import '@aws-amplify/ui-react/styles.css';

import "normalize.css";
import "./style/_app/globals.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


import Layout from '@/modules/Layout'
import store, { persistor } from "@/store/index";

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

import RouteController from "./component/global/Route.controller";
import JWTController from "./component/global/JWT.controller";

const AppController = () => {
  return (
    <>
      <RouteController />
      <JWTController />
    </>
  )
}

const AppView = ({ Component, pageProps }) => {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


const AppStorageWrapper = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

function TwitterTrackerApp(prop) {
  return (
    <AppStorageWrapper>
      <AppController />
      <AppView {...prop} />
    </AppStorageWrapper>
  );
}

export default TwitterTrackerApp;