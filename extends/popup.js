// chrome.bookmarks.getTree(function(bookmarkArray){
//     console.log(bookmarkArray);
// });

const inputElement = document.getElementById("txt")
      const btn = document.getElementById("button")
      console.log(btn, inputElement)
      let _bookmarkArray = ''
      chrome.bookmarks.getTree(function(bookmarkArray){
        document.getElementById("txt").value = JSON.stringify(bookmarkArray, null, " ")
          console.log(bookmarkArray);
          _bookmarkArray = bookmarkArray
      });
      btn.onclick = function() {
        // chrome.bookmarks.getTree(function(bookmarkArray){
        //   inputElement.value = JSON.stringify(bookmarkArray)
        //   console.log(bookmarkArray);
        // });
        if (navigator.clipboard) {
            navigator.clipboard.writeText(JSON.stringify(_bookmarkArray));
        }
      }
      
      