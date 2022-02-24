import web
from Models import RegisterModel, LoginModel
web.config.debug = False

urls = (
    '/', 'Home',
    '/register', 'Register',
    '/postregistration', 'PostRegistration',
    '/login', 'Login',
    '/checklogin', 'CheckLogin',
    '/logout', 'Logout'

)

app = web.application(urls, globals())
session = web.session.Session(app, web.session.DiskStore("sessions"), initializer={'user': None})
session_data = session._initializer

render = web.template.render("Views/Templates", base="MainLayout", globals={'session': session_data,
                                                                            'current_user': session_data["user"]})


# Classes/Routes
class Home:
    def GET(self):
        data = type('obj', (object,), {"username":"adi","password": "1234"})

        login = LoginModel.LoginModel()
        is_correct = login.check_user(data)

        if is_correct:
            session_data['user'] = is_correct

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
        print("you are in Checkout after check_user")
        if is_correct:
            print("you are in Checkout in the if statement")
            session_data['user'] = is_correct
            return is_correct
        return "error"


class Logout:
    def GET(self):
        session['user'] = None
        session_data['user'] = None
        session.kill()
        return 'success'


class Test:
    def GET(self):
        return render.Test()


if __name__ == "__main__":
    app.run()
