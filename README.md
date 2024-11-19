Frontend uses React.js, backend uses Django

NOTE:

Frontend folder lacks "node_modules" as it is too big to add to github repo (can be added by running npm install in the frontend folder)

Backend folder lacks "env" since it is also too big (can be added by creating your own virtual env in the backend folder)

This is how the full working directory should look:

../gummies/
├── backend/
│   ├── api/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   ├── env/
│   │   ├── bin/
│   │   ├── include/
│   │   ├── lib/
│   │   └── pyvenv.cfg
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── node_modules/        (Dependencies installed by npm)
│   ├── public/              (Public assets)
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── questions.csv
│   │   └── robots.txt
│   ├── src/                 (Source files)
│   │   ├── pages/           (Page components)
│   │   │   ├── About.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Quiz.js
│   │   │   ├── Recommendations.js
│   │   │   └── TestBackend.js
│   │   ├── App.css          (Main styles)
│   │   ├── App.js           (Main React app file)
│   │   ├── index.css        (Additional global styles)
│   │   └── index.js         (Entry point for React app)
│   ├── package-lock.json    (Exact versions of dependencies)
│   ├── package.json         (Project metadata and dependencies)
│   └── README.md            (Documentation for the project)
