class apiResponse {
    constructor(statusCode,message,status="success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400
    }
}
export {apiResponse}