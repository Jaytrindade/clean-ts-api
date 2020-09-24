export class SignUpController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      body: 'Missing Param: name'
    }
  }
}
