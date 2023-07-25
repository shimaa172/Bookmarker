// bookmarkName input
var bookmarkNameInput = document.getElementById("bookmarkName")

// bookmarkUrl input
var bookmarkUrlInput = document.getElementById("bookmarkURL")

// array 
var BookmarkContainer = [];

// for get data from inputs and push it in the array
function addBookmaker(){
   var Bookmark ={
    bookmarkName:bookmarkNameInput.value,
    bookmarkURL:bookmarkUrlInput.value
   }
   BookmarkContainer.push(Bookmark);

   console.log(BookmarkContainer);

   displayData();
   clearData();

}

// for displayData in the tabel 
function displayData(){
    var cartona = "";

    for(var i=0 ; i<BookmarkContainer.length ; i++){
        cartona+= `
        <tr>
                    <td>${i}</td>
                    <td>${BookmarkContainer[i].bookmarkName}</td>
                    <td>
                        <a href="${BookmarkContainer[i].bookmarkURL}" target="_blank">
                            <button class="btn btn-success " data-index="0">
                               <i class="fa-solid fa-eye pe-2"></i>Visit
                            </button>
                        </a>
                    </td>
                    <td>
                        <button class="btn btn-danger pe-2" data-index="0" onclick="deleteBookmaker(${i})">
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                          </button>
                    </td>
                </tr>
        `
    }
    document.getElementById("tableContent").innerHTML= cartona;
    
}

// for reset inputs
function clearData(){
    bookmarkNameInput.value=" ";
    bookmarkUrlInput.value=" ";
}

// for delete row in the table
function deleteBookmaker(index){
 BookmarkContainer.splice(index, 1);
 displayData();
}


// for change input style
function ChangeInputStyle(element, borderColor , boxShadow ) {
    element.style.borderColor = borderColor;
    element.style.boxShadow = boxShadow;

  }

// colors we need
var green = "#198754";
var red = "#dc3545"; 


// for validate  BookmarkURL
function validateBookmarkURL() {

    // Regular expression to match URL format
    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
      
    // Test the input value against the regular expression
    const isValid = urlRegex.test(bookmarkUrlInput.value);
      
    if (isValid) {
        ChangeInputStyle(bookmarkUrlInput , green ,"0 0 0 0.25rem rgba(25,135,84,.25)" ) ;
    }
    else{
    ChangeInputStyle(bookmarkUrlInput , red ,"0 0 0 0.25rem rgba(220,53,69,.25)" ) ;
    }
};

// for validate  BookmarkName
function validateBookmarkName() {

    // Regular expression to match URL format
    const urlRegex = /^[a-zA-Z0-9\s]+$/;
      
    // Test the input value against the regular expression
    const isValid = urlRegex.test(bookmarkNameInput.value);
      
    if (isValid) {
        ChangeInputStyle(bookmarkNameInput , green ,"0 0 0 0.25rem rgba(25,135,84,.25)" ) ;
    }
    else{
    ChangeInputStyle(bookmarkNameInput , red ,"0 0 0 0.25rem rgba(220,53,69,.25)" ) ;
    }
};
