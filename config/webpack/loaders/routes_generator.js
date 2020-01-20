const { exec } = require('child_process');

module.exports = class RailsRoutesGeneratorPlugin {
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.beforeRun.tapAsync('RoutesGeneratorPlugin', (compilation, callback) => {
      exec('bin/rails generate_sdk_routes_file', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          process.exit(1)
          return;
        }
        callback()
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
      });
    });
  }
}
