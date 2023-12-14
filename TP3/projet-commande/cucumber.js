// cucumber.js
require("ts-node/register"); // Ajoutez cette ligne pour prendre en charge TypeScript
module.exports = {
  require: ["./step-definitions/*.ts"],
  // Autres configurations...
};
