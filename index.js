const databases = [];
const saved_dbs = [];
const table_definitions = [];


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
      function createTable( )
      {
         document.getElementById("select-database")
          
      }
      function getDataDefinition()
      {   const no_of_columns = document.getElementById("no-of-cols").value
        
          const table_creation_section  = document.getElementById("table-creation-section")
          const container = document.createElement("div");
          for (let i = 0; i < no_of_columns; i++) {
            const section = document.createElement("div");
            section.className = "column-section";
            section.innerHTML = `
              <h4>Column ${i + 1}</h4>
              <label>Column Name: 
                <input type="text" name="column[${i}][name]" placeholder="Enter column name">
              </label>
              <label>Data Type: 
                <select name="column[${i}][type]">
                  <option>INT</option>
                  <option>VARCHAR</option>
                  <option>TEXT</option>
                  <option>DATE</option>
                  <option>BOOLEAN</option>
                </select>
              </label>
              <label>Constraints: 
                <input type="text" name="column[${i}][constraints]" placeholder="e.g., NOT NULL">
              </label>
              <label>Key: 
                <select name="column[${i}][key]">
                  <option>None</option>
                  <option>Primary Key</option>
                  <option>Foreign Key</option>
                  <option>Unique</option>
                </select>
              </label>
            `;
            container.appendChild(section);
            

          }
            submit_btn = document.createElement("button")
            onclick_attr = document.createAttribute("onclick")
            onclick_attr.value =`storeInArr(${no_of_columns})`
            submit_btn.innerHTML="submit"

            submit_btn.setAttributeNode(onclick_attr)
          table_creation_section.appendChild(container);
          table_creation_section.appendChild(submit_btn)
          
          
        }
      function storeInArr(no_of_columns)
      {  
        const all_column_defs =[];
        for(i=0;i<=no_of_columns-1;i++){
        const column_name = document.getElementsByName(`column[${i}][name]`)
        const column_constraints = document.getElementsByName(`column[${i}][constraints]`)
        const column_key =   document.getElementsByName(`column[${i}][key]`)
        
          const col_obj= {
            name : column_name[0].value,
            constraints: column_constraints[0].value,
            key:column_key[0].value 
          }
          
          all_column_defs.push(col_obj)
          
        }
        table_definitions.push(all_column_defs)
             
        console.log("working properly")
      }

      

      