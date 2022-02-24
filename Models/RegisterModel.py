import pymongo
import bcrypt


class RegisterModel:
    def __init__(self):
        print("You are in __init__ RegisterModel")
        self.client = pymongo.MongoClient()
        self.db = self.client.codewizard
        self.Users = self.db.users

    def insert_user(self, data):
        print("You are in insert_user RegisterModel3")
        hashed = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt())
        myuser = self.Users.find_one({"username": data.username})
        # mypasword = self.Users.find_one({"password": hashed})
        # TODO : add check for the password
        if myuser:
            print("the username or password is already exists")
        else:
            insert_id = self.Users.insert_one({"username": data.username, "name": data.name,
                                               "email": data.email, "password": hashed})
            print("your id: ", insert_id)
