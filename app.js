// Book constructor
 function Book (title,author,isbn){
    this.title= title;
    this.author =author;
    this.isbn = isbn;
 }

// UI constructor
function UI () {}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>${book.isbn} </td>
        <td><a href="#" class= "delete">X<a></td>
    `;

    list.appendChild(row);

}

UI.prototype.showAlert= function(message, className){

    const div =document.createElement('div');

    div.className=`alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container =document.querySelector('.container');
    const form =document.querySelector('#book-form');

    container.insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.danger').remove();
    },3000);
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = "" ;
    document.getElementById('author').value = "" ;
    document.getElementById('isbn').value =  " ";
}

UI.prototype.deleteBook =function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Event Listener
document.getElementById('book-form').addEventListener('submit',
function(e){

    const title =document.getElementById('title').value ;
    const author =document.getElementById('author').value ;
    const isbn =document.getElementById('isbn').value ;


    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title ==="" ||author ===""|| isbn ===""){
        ui.showAlert('Please all the Field', 'danger');
    }else{
        ui.addBookToList(book);
    } 

    ui.clearFields();

    ui.showAlert('Book Added!','success');

   ui.deleteBook(e.target);


    e.preventDefault();
   

});


















