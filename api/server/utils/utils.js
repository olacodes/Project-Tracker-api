class Util {
    constructor() {
        this.statusCode = null,
        this.type = null,
        this.message = null,
        this.data = null
    }

    setSuccess(statusCode, message, data){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.type = 'success'
    }

    setError(statusCode, message){
        this.statusCode = statusCode
        this.message = message
        // this.type = 'error'
    }

    send(res){
        const result = {
            status: this.type,
            message: this.message,
            data: this.data,
        }

        if(this.type === 'success') {
            return res.status(this.statusCode).json(result);
        }
        else if(this.type === null) {
            return res.status(this.statusCode).json({
                status: 'validation error',
                message: this.message.errors[0].message
            })
        }
        return res.status(this.statusCode).json({
            status: this.type,
            message: this.message
        })
    }
}

module.exports = Util