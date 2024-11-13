<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Define o destinatário, assunto e corpo do e-mail
    $destinatario = "ludmila.reis2143@gmail.com";
    $assunto = "Mensagem de Contato: $nome";
    $corpo = "Você recebeu uma nova mensagem de $nome.\n\n";
    $corpo .= "Email: $email\n\n";
    $corpo .= "Mensagem:\n$mensagem";

    // Define os cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "<p>Mensagem enviada com sucesso!</p>";
    } else {
        echo "<p>Falha ao enviar a mensagem.</p>";
    }
}
?>