# Find the Index of the Numbers 🔎

This is a simple JavaScript project that finds the **index of a number inside an array** using the **findIndex() method**.

The user enters a number, clicks the **Find** button, and the application displays the index of that number from the predefined array.

---

## 📌 Project Preview

Default Array:

[17, 31, 77, 20, 63]

Example:

| Input | Output |
|------|------|
| 77 | 2 |
| 20 | 3 |
| 17 | 0 |
| 100 | -1 |

If the number **does not exist**, the program returns **-1**.

---

## 🚀 Features

- Takes number input from the user
- Searches the number in a predefined array
- Uses JavaScript **findIndex()** method
- Displays the index instantly on button click
- Simple and beginner-friendly UI

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Bootstrap 4  

---

## 📂 Project Structure

project-folder
│
├── index.html  
├── index.css  
├── index.js  
└── README.md  

---

## ⚙️ How It Works

1. User enters a number in the input field.
2. The **Find** button is clicked.
3. JavaScript reads the input value.
4. The `findIndex()` method checks the number in the array.
5. The index is displayed on the screen.

Example JavaScript logic:

```javascript
let numbers = [17, 31, 77, 20, 63];

let index = numbers.findIndex(function(eachItem){
  return eachItem === userValue;
});