const cds = require('@sap/cds');

cds.on('bootstrap', (app: any) => {
  console.log('🚀 Servidor iniciando...');
});

module.exports = cds.server;