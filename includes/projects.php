<section id="projects" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-5 fw-bold">Projetos</h2>
        <div class="row g-4">
            <?php
                $projects = [
                    [
                        'title' => 'E-commerce Platform',
                        'description' => 'Plataforma de e-commerce completa com carrinho de compras e pagamentos integrados.',
                        'technologies' => 'PHP, MySQL, Bootstrap',
                        'image' => 'fa-shopping-cart'
                    ],
                    [
                        'title' => 'Task Management App',
                        'description' => 'Aplicação web para gerenciamento de tarefas com autenticação de utilizadores.',
                        'technologies' => 'React, Node.js, MongoDB',
                        'image' => 'fa-tasks'
                    ],
                    [
                        'title' => 'Blog CMS',
                        'description' => 'Sistema de gestão de conteúdo para blogs com editor rico e comentários.',
                        'technologies' => 'PHP, MySQL, Admin Panel',
                        'image' => 'fa-blog'
                    ],
                    [
                        'title' => 'Portfolio Website',
                        'description' => 'Website responsivo para apresentação de trabalhos e contacto com clientes.',
                        'technologies' => 'HTML, CSS, JavaScript',
                        'image' => 'fa-briefcase'
                    ]
                ];

                foreach ($projects as $project) {
            ?>
            <div class="col-lg-6">
                <div class="project-card bg-white rounded shadow">
                    <div class="project-image bg-primary text-white p-4 rounded-top text-center">
                        <i class="fas <?php echo $project['image']; ?> fa-3x"></i>
                    </div>
                    <div class="p-4">
                        <h4><?php echo $project['title']; ?></h4>
                        <p class="text-muted"><?php echo $project['description']; ?></p>
                        <p class="badge bg-info"><?php echo $project['technologies']; ?></p>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</section>
