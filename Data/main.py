# Importerar flask
from flask import Flask, render_template

# Skapar webbapplikationen i variabeln "app"
app = Flask(__name__)

# Skapar en rutt till webbsidans startsida
@app.route("/")
# Definierar vad som ska köras vid start
def home():
    # Hämtar och skickar html-filen
    return render_template("index.html")

# Startar wbbservern och aktiverar debug för felmeddelande
if __name__ == "__main__":
    app.run(debug=True)