<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> dom </title>
</head>
<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "code with tushar"
    const addText = document.createTextNode("code with tushar")
    div.appendChild(addText)

    document.body.appendChild(div)
</script>
</html>