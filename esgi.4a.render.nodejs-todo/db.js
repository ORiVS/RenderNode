const { Sequelize } = require('sequelize')
require('dotenv').config();

// Database
const sequelize = new Sequelize(
  'cloud_zu5l',
    'cloud_zu5l_user',
    'oSRlyDx5vzXaNF3QChvwEKmajH2f9rIs',

  {
      host: 'dpg-clesbnt3qkas73b04rc0-a',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

// Test the database connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connecté');
    } catch (error) {
        console.error('Non connecté', error);
    }
}

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
