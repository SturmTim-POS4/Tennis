//----------------------------------------
// .Net Core WebApi project create script 
//           v6.1.1 from 2022-04-04
//   (C)Robert Grueneis/HTL Grieskirchen 
//----------------------------------------

using Microsoft.OpenApi.Models;
using Tennis.Services;
using TennisDb;

string corsKey = "_myAllowSpecificOrigins";
string swaggerVersion = "v1";
string swaggerTitle = "Tennis";

var builder = WebApplication.CreateBuilder(args);

#region -------------------------------------------- ConfigureServices
builder.Services.AddControllers();
builder.Services.AddDbContext<TennisDbContext>();
builder.Services.AddHostedService<FillDbService>();
builder.Services.AddScoped<TennisService>();


builder.Services
  .AddEndpointsApiExplorer()
  .AddSwaggerGen(x => x.SwaggerDoc(
    swaggerVersion,
    new OpenApiInfo { Title = swaggerTitle, Version = swaggerVersion }
  ))
  .AddCors(options => options.AddPolicy(
    corsKey,
    x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
  ));
#endregion

var app = builder.Build();

#region -------------------------------------------- Middleware pipeline
if (app.Environment.IsDevelopment())
{
	app.UseDeveloperExceptionPage();
	Console.WriteLine("******** Swagger enabled: http://localhost:5000/swagger (to set as default route: see launchsettings.json)");
	app.UseSwagger();
	app.UseSwaggerUI(x => x.SwaggerEndpoint( $"/swagger/{swaggerVersion}/swagger.json", swaggerTitle));
}

app.UseCors(corsKey);

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

//app.UseExceptionHandler(config =>
//{
//  config.Run(async context =>
//  {
//    context.Response.StatusCode = 500;
//    context.Response.ContentType = "application/json";
//    var error = context.Features.Get<IExceptionHandlerFeature>();
//    if (error != null)
//    {
//      await context.Response.WriteAsync(
//        $"Exception: {error.Error?.Message} {error.Error?.InnerException?.Message}");
//    }
//  });
//});

app.MapControllers();
#endregion

app.Run();
