<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Categorie;
use App\Entity\Image;
use App\Entity\Produit;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('FR-fr');

        for( $i=1; $i<=4; $i++)
         { 
             $categorie =new Categorie();
             $content ='<p>' . join('</p><p>',$faker->paragraphs(3)) .'</p>';
             $titre= $faker->sentence();
             $categorie->setTitle($titre)
                         ->setContent($content);
                  
             $manager->persist($categorie);
 
             for( $k=1; $k<=4; $k++)
             {
                
                 $content ='<p>' . join('</p><p>',$faker->paragraphs(2)) .'</p>';
                 $produit = new Produit();
                 $avatar= "http://lorempixel.com/640/480/";
                 $produit->setRef("prodtuit". $k)
                         ->setTitle($faker->slug)
                         ->setContent($content)
                         ->setPrix(mt_rand(5,20))
                         ->setCategorie($categorie)
                          ->setAvatar($avatar);
                         $manager->persist($produit);
                         for( $d=1; $d<=4; $d++)
                         {
                            $avatar= "http://lorempixel.com/640/480/";
                            $image = new Image();
                            $image->setPath($avatar)
                                ->setCaption("image". $d)
                                ->setProduit($produit);
                            $manager->persist($image);
                         }
             } 
            
         }

         

        $manager->flush();
    }
}
