<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200420223414 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE produit_avatar (produit_id INT NOT NULL, avatar_id INT NOT NULL, INDEX IDX_E125B915F347EFB (produit_id), INDEX IDX_E125B91586383B10 (avatar_id), PRIMARY KEY(produit_id, avatar_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE produit_avatar ADD CONSTRAINT FK_E125B915F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit_avatar ADD CONSTRAINT FK_E125B91586383B10 FOREIGN KEY (avatar_id) REFERENCES avatar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE avatar CHANGE file_path file_path VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE client CHANGE company company VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FF347EFB');
        $this->addSql('DROP INDEX IDX_C53D045FF347EFB ON image');
        $this->addSql('ALTER TABLE image DROP produit_id');
        $this->addSql('ALTER TABLE post CHANGE avatar avatar VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE produit CHANGE set_date set_date DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE roles roles JSON NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE produit_avatar');
        $this->addSql('ALTER TABLE avatar CHANGE file_path file_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE client CHANGE company company VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE image ADD produit_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FF347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('CREATE INDEX IDX_C53D045FF347EFB ON image (produit_id)');
        $this->addSql('ALTER TABLE post CHANGE avatar avatar VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE produit CHANGE set_date set_date DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE user CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
    }
}
