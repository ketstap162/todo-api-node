const http = require('http');
const app = require('./app');
const sequelize = require('./db/sequelize')

const port = process.env.SERVER_PORT || 4000;
const server = http.createServer(app);

const syncDatabase = async () => {
    try {
      await sequelize.sync();
      console.log('Database synced');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  };

server.listen(port, async () => {
    await syncDatabase();
    console.log(`Server running on http://localhost:${port}`);
  });
