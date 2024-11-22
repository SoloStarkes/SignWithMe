const Redis = require('redis');

// Create Redis client
const redisClient = Redis.createClient({
  url: 'redis://localhost:6379', // Redis connection URL
});

redisClient.on('error', (err) => console.error('Redis Client Error:', err));
redisClient.on('ready', () => { console.log('Connected to the Redis database') });
redisClient.connect(); // Establish connection

module.exports = redisClient;

