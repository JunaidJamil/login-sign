import {db} from "/firebase.mjs"
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 




document.getElementById('budgetbtn').addEventListener( 'click', async ()=> { 
  var budget = document.querySelector("#budget").value;
  
  if (budget != "" ) {
    try {
      const docRef = await addDoc(collection(db, "BudgetApp"), {
        budget: budget
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    document.getElementById("error").innerHTML = "Please enter a valid value";
    var elements = document.getElementsByClassName("All_cont");
      for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "red";
    }
  }
})



let shown = document.getElementById("showing_content")
const querySnap = await getDocs(collection(db, "BudgetApp"));
querySnap.forEach((doc) => {
shown.innerHTML =` <h2>Budget</h2>  ${doc.data().budget}`;

})

document.getElementById('put_expense').addEventListener('click', async()=>{  
  var budget = parseFloat(document.querySelector("#budget").value);
  var product = document.getElementById("Product").value;
  var expense = document.getElementById("Expense").value;

 
    // document.getElementById("rror2").innerHTML = "Please enter a value";
    try {
      const docRef = await addDoc(collection(db, "BudgetApp"), {
        budget:budget,
        product: product,
        expense:expense
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })

  let lastexp = budget-expense;
  let shownexp = document.getElementById("showing_expense")
  let after = document.getElementById('after');
  const querySnapshot = await getDocs(collection(db, "BudgetApp"));
  querySnapshot.forEach((doc) => {
  shownexp.innerHTML =` <h2>Expense</h2>  ${doc.data().expense} `;
  after.innerHTML = `<h2>Remaining</h2> ${doc.data().lastexp}`  
})




  // } else {
  //   var newItemId = Date.now(); // Generate a unique ID for the expense item
  //   var expenseItem = `<li id='${newItemId}'>
  //     ${product.value}<span>${expense.value}</span>
  //     <i onclick='edit("${newItemId}")' class="fa-solid fa-pencil"></i>
  //     <i onclick='del("${newItemId}")' class="fa-solid fa-trash"></i>
  //   </li>`;

  //   document.getElementById('main_content').innerHTML += expenseItem;
  //   product.value = "";

  //   var expenseValue = parseFloat(expense.value);
  //   totalExpense += expenseValue;
  //   expense.value = "";

  //   document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
  //   document.getElementById("after").innerHTML = `<h2>Remaining</h2> ${budget - totalExpense}`;
  // }

// function del(itemId) {
//   var item = document.getElementById(itemId);
//   var expenseValue = parseFloat(item.querySelector("span").textContent);
//   totalExpense -= expenseValue;
//   item.remove();

//   document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
// }

// function edit(itemId) {
//   var item = document.getElementById(itemId);
//   var product = item.firstChild;
//   var expense = item.querySelector("span");

//   var newProduct = prompt("Enter the new product name", product.textContent);
//   var newExpense = parseFloat(prompt("Enter the new expense amount", expense.textContent));

//   if (newProduct !== null && newExpense !== null && !isNaN(newExpense)) {
//     totalExpense -= parseFloat(expense.textContent);
//     totalExpense += newExpense;

//     product.textContent = newProduct;
//     expense.textContent = newExpense;

//     document.getElementById("showing_expense").innerHTML = `<h2>Expense</h2> ${totalExpense}`;
//     document.getElementById("after").innerHTML = ``;
//   }
// }

    
   // ...