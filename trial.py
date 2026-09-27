print("Hello, welcome to the roommate identifier..!")

name = input("Please enter your name: ").strip()
print(f"Hello {name}..!")

roommate_list = ["rutik", "vedant", "soham", "vaibhav"]

while True:
    if name.lower() in roommate_list:
        print(f"{name}, you are a roommate..! Welcome boss..!")
        want_to_continue = input("Do you want to continue..? (y/n): ")
        if want_to_continue.lower() == 'y':
            continue
        else:
            print("Thank you for using the roommate identifier..! Have a great day..!")
            break
    else:
        print(f"{name}, you are not a roommate..!")
        new_roommate = input("Are you a new roommate..? (y/n): ")
        if new_roommate.lower() == 'y':
            password = input("Please enter the password to add you as a roommate: ")
            if password == "roommate123":
                roommate_list.append(name.lower())
                print(f"{name}, you have been added as a roommate..! Welcome boss..!")
            else:
                print("Incorrect password..! You cannot be added as a roommate..!")
                if input("Do you want to try again..? (y/n): ").lower() == 'y':
                    continue
                else:
                    print("Thank you for using the roommate identifier..! Have a great day..!")
                    break
