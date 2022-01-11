import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求中的response对象
    const status = exception.getStatus(); // 获取异常状态码

    const exceptionResponse = exception.getResponse() as {message: string};

    // 设置错误信息
    let message  = exception.message;
    if (exceptionResponse.message) {
      message = exceptionResponse.message
    } else if (exception.message) {
      message = exception.message;
    } else {
      message = `${status >= 500 ? "Server Error" : "Client Server"}`;
    }
    console.log('response:', exceptionResponse)
    const errorResponse =  {
      data: {},
      message,
      code: -1,
    };

    // 设置返回状态码，请求头、发送错误信息
    response.status(status);
    response.header("Content-Type", "application/json; charset=utf-8");
    response.send(errorResponse);
  }
}
