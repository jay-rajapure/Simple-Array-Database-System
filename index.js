const databases = [];
      function display_btn(str)
      {
        
        switch (str)
        {
            case 'create-db-button':
                document.getElementById("create-db-input").style.display = "inline"
                break;
        }

      }

      function createDataBase(){
         inputelement = document.getElementById("create-db-input")
         input_value = inputelement.value 
         databases.push(input_value)
         databases.forEach(
          function(currentDb){
              console.log(currentDb)
         })
      }