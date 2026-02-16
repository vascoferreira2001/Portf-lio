<section id="projects" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-5 fw-bold">Projetos</h2>
        <div class="row g-4">
            <?php
                $projects = [
                    [
                        'title' => 'CyberCore Website & CRM',
                        'description' => 'Website Institucional da CyberCore + Área de Cliente (CRM)',
                        'technologies' => 'PHP, MySQL, Bootstrap',
                        'icon' => 'fa-shopping-cart',  // Usar icon OU image
                        'image' => null,  // ou 'img/project1.jpg'
                        'link' => 'https://www.cybercore.pt/'
                    ],
                    [
                        'title' => 'Task Management App',
                        'description' => 'Aplicação web para gerenciamento de tarefas com autenticação de utilizadores.',
                        'technologies' => 'React, Node.js, MongoDB',
                        'icon' => 'fa-tasks',
                        'image' => null,
                        'link' => 'https://exemplo.com/tasks'
                    ],
                    [
                        'title' => 'Blog CMS',
                        'description' => 'Sistema de gestão de conteúdo para blogs com editor rico e comentários.',
                        'technologies' => 'PHP, MySQL, Admin Panel',
                        'icon' => 'fa-blog',
                        'image' => null,
                        'link' => 'https://exemplo.com/blog'
                    ],
                    [
                        'title' => 'Portfolio Website',
                        'description' => 'Website responsivo para apresentação de trabalhos e contacto com clientes.',
                        'technologies' => 'HTML, CSS, JavaScript',
                        'icon' => 'fa-briefcase',
                        'image' => null,
                        'link' => 'https://exemplo.com/portfolio'
                    ]
                ];

                foreach ($projects as $project) {
            ?>
            <div class="col-lg-6">
                <div class="project-card bg-white rounded shadow h-100">
                    <div class="project-image bg-primary text-white rounded-top text-center position-relative overflow-hidden">
                        <?php if (!empty($project['image'])): ?>
                            <img src="<?php echo $project['image']; ?>" alt="<?php echo $project['title']; ?>" class="w-100 project-img">
                        <?php else: ?>
                            <div class="p-5">
                                <i class="fas <?php echo $project['icon']; ?> fa-4x"></i>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="p-4">
                        <h4 class="mb-3"><?php echo $project['title']; ?></h4>
                        <p class="text-muted mb-3"><?php echo $project['description']; ?></p>
                        <div class="mb-3">
                            <span class="badge bg-info"><?php echo $project['technologies']; ?></span>
                        </div>
                        <?php if (!empty($project['link'])): ?>
                            <a href="<?php echo $project['link']; ?>" target="_blank" class="btn btn-outline-primary btn-sm">
                                <i class="fas fa-external-link-alt me-1"></i> Ver Projeto
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</section>
