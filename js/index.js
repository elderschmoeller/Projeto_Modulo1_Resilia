function start(){

document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./index.js"></script>
    <script src="./anao.js"></script>
    <script src="./elfo.js"></script>
    <script src="./fimdejogo.js"></script>
    <script src="./wizard.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="container-imagem"> 

        <img src="gif-ring.gif" alt="gif-background" />
        <button>Let's Start !</button>
    
    </div>
</body>
</html>
`);
return setTimeout('digitar()',1000);
}