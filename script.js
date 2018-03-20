function dodajRed()
			{
			
			var nameBox = document.getElementById("nameTextBox");
			var lastnameBox = document.getElementById("lastnameTextBox");
			
			var name = nameBox.value;
			var lastname = lastnameBox.value;
			
			var table = document.getElementById("table");
			
			table.innerHTML += "<tr> <td>" + name + "</td> <td>" + lastname + "</td> </tr>";
			
			nameBox.value = "";
			lastnameBox.value = "";
			}