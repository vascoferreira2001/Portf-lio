<?php
// Simple contact form handler
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        $_SESSION['error'] = 'Todos os campos são obrigatórios.';
        header('Location: ../index.php#contact');
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = 'Email inválido.';
        header('Location: ../index.php#contact');
        exit;
    }

    // Send email (replace with your email)
    $to = 'vascoferreira@cybercore.pt';
    $subject = "Nova mensagem de $name";
    $body = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        $_SESSION['success'] = 'Mensagem enviada com sucesso!';
    } else {
        $_SESSION['error'] = 'Erro ao enviar mensagem. Tente novamente.';
    }

    header('Location: ../index.php#contact');
    exit;
}
