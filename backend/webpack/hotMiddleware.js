const webpackHot = require('webpack-hot-middleware')
const {PassThrough} = require('stream');

const hotMiddleware = (compiler, opts) => {
    const middleware = webpackHot(compiler, opts);
    return async (ctx, next) => {
        const stream = new PassThrough()
        ctx.body = stream
        await middleware(ctx.req, {
            write: stream.write.bind(stream),
            writeHead: (status, headers) => {
                ctx.status = status
                ctx.set(headers)
            },
        }, next)
    }
    
}


module.exports = hotMiddleware;