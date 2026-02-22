# VibeCode School Age Checker
# This program asks for the user's name and age,
# checks if they are 18 or older, and gives appropriate access message.
# Includes option to try again in a loop.

while True:
    # Get user input
    name = input("What's your name? ").strip()

    # Get age with basic error handling
    while True:
        try:
            age = int(input("How old are you? "))
            break
        except ValueError:
            print("Please enter a valid number for your age.")

    # Check age and print appropriate message
    if age >= 18:
        print(f"Welcome to VibeCode School, {name}! You can vibe code freely.")
    else:
        print(f"Hey {name}, come back when you're 18!")

    # Ask if they want to try again
    again = input("\nWant to check another person? (yes/no): ").strip().lower()
    if again not in ['yes', 'y', 'yeah', 'sure']:
        print("Thanks for using VibeCode Age Checker. Catch you later! ✌️")
        break

    print("-" * 40)  # just a little separator for readability