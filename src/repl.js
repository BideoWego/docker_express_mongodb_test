(async () => {
  const mongo = require('./mongo');
  await mongo();
  const repl = require('repl').start({});
  const lodash = require('lodash');
  const helpers = require('./helpers');
  const models = require('./models');

  const add = (name, object, unpack) => {
    repl.context[name] = object;
    if (unpack) {
      Object.keys(object).forEach(key => {
        repl.context[key] = object[key];
      });
    }
  };

  // ----------------------------------------
  // Libs
  // ----------------------------------------
  add('lodash', lodash);

  // ----------------------------------------
  // Helpers
  // ----------------------------------------
  add('helpers', helpers, true);

  // ------------------------------------
  // Models
  // ------------------------------------
  add('models', models, true);

  // ----------------------------------------
  // Logging
  // ----------------------------------------
  add('lg', console.log);
})();
