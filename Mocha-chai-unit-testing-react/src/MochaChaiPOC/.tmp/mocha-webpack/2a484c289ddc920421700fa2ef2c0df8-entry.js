
    var testsContext = require.context("../../wwwroot", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    