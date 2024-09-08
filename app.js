  
        function foo() {
            var a = document.getElementById('inp');
            var li = document.createElement('li');
            var litext = document.createTextNode(a.value);
            li.appendChild(litext);
            getul.appendChild(li);
            a.value = ' ';
            
            // Create delete button
            var deletebtn = document.createElement('button');
            var deletebtntext = document.createTextNode('Delete');
            deletebtn.appendChild(deletebtntext);
            li.appendChild(deletebtn);
            deletebtn.setAttribute('onclick', 'del(this)');
            deletebtn.setAttribute('class', 'btn btn-danger aaa');
            
            // Create edit button
            var editbtn = document.createElement('button');
            var editbtntext = document.createTextNode('Edit');
            editbtn.appendChild(editbtntext);
            li.appendChild(editbtn);
            editbtn.setAttribute('onclick', 'editfun(this)');
            editbtn.setAttribute('class', 'btn btn-info aaa');
        }

        var getul = document.getElementById('ul');

        function deleteall() {
            getul.innerHTML = " ";
        }

        function del(e) {
            e.parentNode.remove();
        }

        function editfun(e) {
            var a = prompt('Enter edit message', e.parentNode.firstChild.nodeValue);
            e.parentNode.firstChild.nodeValue = a;
        }