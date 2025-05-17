<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/plants', name: 'app_plants')]
    public function plants(): Response
    {
        return $this->render('home/plants.html.twig', [ 
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/conseil', name: 'app_conseil')]
    public function conseil(): Response
    {
        return $this->render('home/conseil.html.twig', [    
            'controller_name' => 'HomeController',
        ]);
    }
    
}
