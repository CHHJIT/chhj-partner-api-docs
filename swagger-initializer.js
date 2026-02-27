window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "chhj-partner-api.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    docExpansion: "full",
    defaultModelRendering: "model",
    defaultModelsExpandDepth: -1,
    defaultModelExpandDepth: -1,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
