import React from "react";
import {createRoutesFromChildren, matchRoutes, useLocation, useNavigationType} from "react-router-dom";
import * as Sentry from "@sentry/react";

export const initSentry = () => {
  Sentry.init({
    dsn: "https://3159319722ec4341b01a0bfb9761ed6e@o488251.ingest.sentry.io/5548347",
    integrations: [
      new Sentry.BrowserTracing({
        // See docs for support of different versions of variation of react router
        // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          React.useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes
        ),
      }),
      new Sentry.Replay()
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    tracesSampleRate: 1.0,

    // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/actionconsole-936bb\.web\.app/],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}