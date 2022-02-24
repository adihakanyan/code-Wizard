import web
from Models import RegisterModel, LoginModel

urls = (
    '/', 'Home',
    '/register', 'Register',
    '/postregistration', 'PostRegistration',
    '/login', 'Login',
    '/checklogin', 'CheckLogin',
    '/test', 'Test'
)

render = web.template.render("Views/Templates", base="MainLayout")
app = web.application(urls, globals())


# Classes/Routes
class Home:
    def GET(self):
        return render.Home()


class Register:
    def GET(self):
        return render.Register()


class PostRegistration:
    def POST(self):
        data = web.input()
        print("this is the data !! : ", data)
        reg_model = RegisterModel.RegisterModel()
        reg_model.insert_user(data)


class Login:
    def GET(self):
        return render.Login()


class CheckLogin:
    def POST(self):
        data = web.input()
        print("this is the data !! : ", data)
        login = LoginModel.LoginModel()
        is_correct = login.check_user(data)

        if is_correct:
            return is_correct
        return "error"


class Test:
    def GET(self):
        return render.Test()


if __name__ == "__main__":
    app.run()
