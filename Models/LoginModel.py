import pymongo
import bcrypt


class LoginModel:
    def __init__(self):
        print("You are in __init__ LoginModel")
        self.client = pymongo.MongoClient()
        self.db = self.client.codewizard
        self.Users = self.db.users

    def check_user(self, data):
        print("You are in check_user LoginModel")
        print("this is the username : ", data.username)
        user = self.Users.find_one({"username": data.username})

        if user:
            print("You are in check_user --if user:-- LoginModel")
            if bcrypt.checkpw(data.password.encode(), user["password"]):
                return user
            else:
                return False
        else:
            return False
