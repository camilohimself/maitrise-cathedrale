const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Dossier source et destination
const sourcePath = '/Users/camilorivera/WORKSPACE-OSOM/CLIENTS-ACTIFS/MAITRISE-CATHEDRALE/artistes/Stile Antico Photos';
const outputPath = './public/images/artistes/';

// Configuration optimisation
const formats = [
  { suffix: 'hero', width: 1200, height: 800, quality: 85 },     // Image hero/featured
  { suffix: 'card', width: 400, height: 300, quality: 80 },      // Cards artistes
  { suffix: 'thumb', width: 200, height: 150, quality: 75 }      // Thumbnails
];

async function optimizeStileAnticoPhotos() {
  console.log('🎭 OPTIMISATION PHOTOS STILE ANTICO');
  console.log('=====================================');

  try {
    // Lire les fichiers du dossier source
    const files = fs.readdirSync(sourcePath)
      .filter(file => file.endsWith('.jpg') && !file.startsWith('.'))
      .sort();

    console.log(`📁 ${files.length} photos trouvées`);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const inputPath = path.join(sourcePath, file);
      
      console.log(`\n🔄 Traitement: ${file}`);
      
      // Obtenir les informations de l'image source
      const metadata = await sharp(inputPath).metadata();
      console.log(`   📏 Taille source: ${metadata.width}x${metadata.height} (${Math.round(metadata.size / 1024 / 1024 * 10) / 10}MB)`);

      // Générer toutes les variantes optimisées
      for (const format of formats) {
        const outputName = `stile-antico-${i + 1}-${format.suffix}.webp`;
        const outputFilePath = path.join(outputPath, outputName);

        await sharp(inputPath)
          .resize(format.width, format.height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: format.quality })
          .toFile(outputFilePath);

        // Vérifier la taille finale
        const stats = fs.statSync(outputFilePath);
        console.log(`   ✅ ${format.suffix}: ${format.width}x${format.height} → ${Math.round(stats.size / 1024)}KB`);
      }
    }

    console.log('\n🎉 OPTIMISATION TERMINÉE !');
    console.log(`📦 ${files.length * formats.length} images optimisées générées`);
    console.log('💡 Réduction estimée: ~98% de taille');

    // Générer le code de mapping pour fasContent.js
    console.log('\n📋 CODE À INTÉGRER DANS fasContent.js:');
    console.log('=====================================');
    console.log(`
// Images Stile Antico optimisées
stile-antico: {
  hero: "/images/artistes/stile-antico-1-hero.webp",
  card: "/images/artistes/stile-antico-2-card.webp", 
  gallery: [
    "/images/artistes/stile-antico-1-hero.webp",
    "/images/artistes/stile-antico-2-hero.webp",
    "/images/artistes/stile-antico-3-hero.webp"
  ]
}
`);

  } catch (error) {
    console.error('❌ Erreur optimisation:', error);
  }
}

// Exécuter l'optimisation
optimizeStileAnticoPhotos();