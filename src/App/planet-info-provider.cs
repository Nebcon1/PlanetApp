using System.Net;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace planet.app
{
    public class planet_info_provider
    {
        private readonly ILogger _logger;

        public planet_info_provider(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<planet_info_provider>();
        }

        [Function("planet_info_provider")]
        public HttpResponseData Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");

            response.WriteString("This is a function for planet information!");

            return response;
        }
    }
}
