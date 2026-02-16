<section id="contact" class="py-5">
    <div class="container">
        <h2 class="text-center mb-5 fw-bold">Contacto</h2>
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <div class="contact-form">
                    <form method="POST" action="includes/contact_handler.php">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>
                <div class="text-center mt-4">
                    <p class="text-muted">Ou contacte-me diretamente:</p>
                    <p>
                        <a href="mailto:vasco@example.com" class="text-decoration-none">vasco@example.com</a><br>
                        <a href="tel:+351912345678" class="text-decoration-none">+351 91 234 5678</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
