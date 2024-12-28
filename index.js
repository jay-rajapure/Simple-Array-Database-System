const databases = [];
const saved_dbs = [];
      function display_section(str)
      {            
          document.getElementById(str).style.display = "inline"
      }

      function createDataBase(){
         inputelement = document.getElementById("create-db-input")
         input_value = inputelement.value 
         databases.push(input_value)
         
         databases.forEach(
          function(currentDb){
              console.log(currentDb)
         })
         document.getElementById("db-create-output").innerHTML=`${input_value} is created`
         
      } 
      
      function showAllDbs()
      {
        const table_creation_section = document.getElementById("table-creation-section")
        if(databases.length === 0 )
        {
          const node = document.createElement("b")
          node.innerHTML = " error : please create a database first " 
          table_creation_section.appendChild(node)
          return
        }
        
          const select_db = document.getElementById("select-database")
          
          
          databases.forEach(function(database)
         {
            if(!saved_dbs.includes(database)){
            const node = document.createElement("option") 
            node.innerHTML = database
            attribute_node = document.createAttribute("value")
            attribute_node.value = database
            node.setAttributeNode(attribute_node)
            select_db.appendChild(node)
            saved_dbs.push(database)

            }
         }
        )

        
      }
      function createTable()
      {
        
          
      }
      

      

      