
    var testsContext = require.context("../../wwwroot/js/test", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    