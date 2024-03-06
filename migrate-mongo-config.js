// In this file you can configure migrate-mongo

let uri = process.env.DB_URI
let root_username = process.env.DB_ROOT_USERNAME
let root_password = process.env.DB_ROOT_PASSWORD
let db_name = process.env.DB_NAME

let splitUri = uri.split("://")
let mongoUrl = `${splitUri[0]}://${root_username}:${root_password}@${splitUri[1]}`

const config = {
  mongodb: {

    url: mongoUrl,

    databaseName: db_name,

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      connectTimeoutMS: 300000, // increase connection timeout to 5 mins
      socketTimeoutMS: 300000, // increase socket timeout to 5 mins
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir 
  migrationFileExtension: ".js",

  // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determine
  // if the file should be run.  Requires that scripts are coded to be run multiple times.
  useFileHash: false,

  // Don't change this, unless you know what you're doing
  moduleSystem: 'commonjs',
};

module.exports = config;
