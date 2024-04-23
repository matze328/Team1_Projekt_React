# Team1_Projekt_React

# HTTP Anfragen für die Anmeldung | Pages

Registrieren / Signup:
POST /register: Diese Anfrage könnte verwendet werden, um einen neuen Benutzer zu registrieren. Sie würde wahrscheinlich JSON-Daten im Anforderungskörper benötigen, die Details wie Benutzername, E-Mail und Passwort enthalten.

Login/ signin:
POST /login/ signin: Diese Anfrage könnte verwendet werden, um einen Benutzer anzumelden. Sie würde wahrscheinlich JSON-Daten im Anforderungskörper benötigen, die Details wie Benutzername und Passwort enthalten.
GET / login: Authentifizierung

Logout:
POST /logout: Diese Anfrage könnte verwendet werden, um einen Benutzer abzumelden.

---

## Express Musik Plattform - MUTIX

1. npm install Pakete nachinstallieren
2. npm run dev, um API-Server auf dem Port, welcher in der .env Datei definiert ist, zu starten

# Dokumentation

<!-- /test : Soll eine Testroute darstellen und Gibt ein Hello World! zurück -->

# Szenario

1. Wir möchten einen Musikplattform entwickeln
2. User Login
3. User Sign Up
4. Benutzer/in soll seine/ihre Musikplayer, Favoriten, Radio, Profileinstellungen (User und Account) verwalten können

# Ordnerstruktur

./index.js: Eintrittspunkt der App

- Sagt Verweise mit /v1 auf den AppRouter --> Bindet über /v1 den AppRouter ein

# AppRouter

- Approuter bindet weitere Routen ein
- bindet die /user mit ein:User Route ist also unter dem Pfad /v1/user erreichbar
- bindet die /auth mit ein:Auth Route ist also unter dem Pfad /v1/auth erreichbar
- bindet die /radio mit ein:Radio Route ist also unter dem Pfad /v1/radio erreichbar

# src/routes

Hier befinden sich alle untergeordneten routen

# src/routes/auth

Hier befindet sich alle Routen mit dem Prefix /v1/auth/...

1. GET - /v1/auth/login: Benutzer einloggen
2. POST - /v1/auth/signup - Benutzer erstellen
3. DELETE - /v1/auth/logout - Benutzer ausloggen

# src/routes/radio

Hier befindet sich alle Routen mit dem Prefix /v1/radio/...

1. PUT - /v1/radio/update: Update Radio
2. PUT - /v1/radio/mark: Radio erledigt markieren
3. POST - /v1/radio/create Todo erstellen
4. DELETE - /v1/radio/delete TODO löschen
5. GET - /v1/radio/byid: Ein einzelnes todo zurück geben
6. GET - /v1/radio/byuserid: Alle Todos von einem Benutzer

# src/routes/user

Hier befindet sich alle Routen mit dem Prefix /v1/user/...

1. GET - /v1/user/profile: Profil des Nutzers erhalten
2. PUT - /v1/user/update: Profil Updaten
3. DELETE /v1/user/delete: Löschen des Benutzers
