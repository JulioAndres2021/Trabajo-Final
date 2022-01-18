
<?php
 
//creo las variables que contienen los datos a enviar
            $uno = $_POST['nombre'];
            $dos = $_POST['apellido'];
            $tres = $_POST['dni'];
            $cuatro = $_POST['fechadenacimiento'];
            $cinco = $_POST['edad'];
            $seis = $_POST['direccion'];
            $siete = $_POST['phone'];
            $ocho = $_POST['email'];
            $nueve = $_POST['ciudades'];
            $diez = $_POST['provincias'];
            $once = $_POST['pais'];
            $doce = $_POST['adjuntarfoto'];
            $trece = $_POST['mensaje'];
            // Abro el archivo

            $file = fopen("archivo.txt", "w");

            // Le cargo los datos

            fwrite($file, $uno . PHP_EOL);
            fwrite($file, $dos . PHP_EOL);
            fwrite($file, $tres . PHP_EOL);
            fwrite($file, $cuatro . PHP_EOL);
            fwrite($file, $cinco . PHP_EOL);
            fwrite($file, $seis . PHP_EOL);
            fwrite($file, $siete . PHP_EOL);
            fwrite($file, $ocho . PHP_EOL);
            fwrite($file, $nueve . PHP_EOL);
            fwrite($file, $diez . PHP_EOL);
            fwrite($file, $once . PHP_EOL);
            fwrite($file, $doce . PHP_EOL);
            fwrite($file, $trece . PHP_EOL);
            // Lo cierro

            fclose($file);

            

            // Muestro el mensaje final

            echo "Tu archivo se ha guardado con el nombre Prueba.txt";

       ?>
