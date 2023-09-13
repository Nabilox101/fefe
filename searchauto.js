       $(document).ready(function() {
            $('.summernote').summernote();
        });

        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("search-input").focus();
        });

    document.getElementById("search-input").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-form").submit();
      }
    });
