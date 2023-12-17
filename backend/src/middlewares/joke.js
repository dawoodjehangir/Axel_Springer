/**
 * Middleware for allowing only GET method
 */
const onlyAllowGetMethod = (request, response, next) => {
  if (request.method !== "GET") {
    return response.status(405).json({
      error: "Chuck says: Method Not Allowed!",
      allowedMethods: ["GET"],
    });
  }
  next();
};

/**
 * Middleware for catering all invalid endpoints
 */
const invalidEndpoints = (request, response) => {
  response
    .status(404)
    .json({ error: "Minimal Server couldn't find the requested URL!" });
};

module.exports = { onlyAllowGetMethod, invalidEndpoints };
