import asyncio
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        name = self.get_query_argument('name', 'World')
        self.write("Hello {}!".format(name))


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])


async def main():
    app = make_app()
    app.listen(8080)
    print('Server started on port 8080')
    await asyncio.Event().wait()


if __name__ == "__main__":
    asyncio.run(main())
