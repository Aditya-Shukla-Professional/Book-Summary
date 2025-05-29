$(document).ready(function() {
    $(".update").on("click", function () {  // used when update button is clicked
        const book = $(this).closest(".book-card");
        $(".form-overlay").css("display", "flex");
        $("#formAction").val("update");
        $("#bookId").val(book.find(".id-tracker").val());
        $("#formTitle").text("Update Book");
        $("#bookTitleInput").val(book.find(".book-title").text());
        $("#bookSummaryInput").val(book.find(".book-summary").html().replace(/\r\n/g, ''));
        $("#bookISBNInput").val(book.find(".isbn-tracker").val());
    });
    $(".add-book-button").on("click", function() {  // used when add button is clicked
        $(".form-overlay").css("display", "flex");
        $("#formAction").val("add");
        $("#formTitle").text("Add Book");
    });
    $(".close-btn").on("click", function() {  // used when the form close button in clicked
        $(".form-overlay").css("display", "none");
    });
    $(".del").on("click",function(){  // used when the delete button is clicked
        const book = $(this).closest(".book-card");
        $.post("/delete",{bookId:book.find(".id-tracker").val()})
        location.reload();
    })
    $("#sort").on("change", function() {  // used when sort by is used to sort the books
        window.location.href = "/home?sort=" + $(this).val()
    })
});
