# FRIENDS Wiki & Forum

A minimalistic, professional web app for managing and exploring FRIENDS characters.

## Features

- Add, edit, and delete characters with name, passion, and image URL
- Clean, modern UI with Tailwind CSS and custom theme
- MongoDB backend with Mongoose models
- EJS templating for dynamic pages

## Screenshots

| Main Page | Read Page | Edit Page |
|-----------|-----------|-----------|
| ![Main](screenshots/main.png) | ![Read](screenshots/read.png) | ![Edit](screenshots/edit.png) |

## Project Structure

```
F.R.E.I.N.D/
├── app.js
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── user.js
├── public/
│   └── stylesheets/
│       └── style.css
├── routes/
│   └── userRoutes.js
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   ├── edit.ejs
│   ├── 404.ejs
│   └── ...
├── package.json
└── README.md
```

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start MongoDB (locally or with a service like Atlas).

3. Run the app:

   ```sh
   node app.js
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Edit `public/stylesheets/style.css` for theme changes.
- Update EJS files in `views/` for UI tweaks.

## License

This project is licensed under the [MIT License](LICENSE) by Ayan Ghosh and Soumyojit Sengupta.
