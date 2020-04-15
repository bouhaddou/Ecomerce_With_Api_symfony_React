<?php

namespace App\Controller;

use App\Entity\Client;
use App\Entity\Shop;
use Doctrine\ORM\EntityManagerInterface;

class InctimentProduitController{

    /** @var EntityManagerInterface   */

    private $manager;
    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }
    public function __invoke(Client $data)
    {
        
        // dd($data);
    }
}