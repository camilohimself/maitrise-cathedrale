#!/usr/bin/env python3
"""
Script création favicon Maîtrise Cathédrale
Extrait la tour du logo et crée les favicons aux bonnes tailles
"""

from PIL import Image
import os

# Chemins
logo_path = "public/images/logo-mc-couleur.png"
output_icon_32 = "src/app/icon.png"
output_icon_180 = "src/app/apple-icon.png"

print("🎨 Création favicons Maîtrise Cathédrale...")
print(f"📂 Source: {logo_path}")

# Charger le logo
logo = Image.open(logo_path)
width, height = logo.size
print(f"📐 Dimensions logo: {width}x{height}px")

# Extraire la tour (partie droite du logo)
# La tour est la silhouette à droite, commencer plus à droite
crop_left = int(width * 0.75)  # Commencer à 75% de la largeur pour avoir juste la tour
crop_box = (crop_left, 0, width, height)

tower = logo.crop(crop_box)
print(f"✂️  Tour extraite: {tower.size[0]}x{tower.size[1]}px")

# Créer un carré centré sur la tour avec fond navy
def create_square_icon(source_img, size, output_path):
    """Crée une icône carrée avec fond navy et image centrée"""

    # Créer fond navy
    navy = (26, 19, 64)  # #1a1340
    icon = Image.new('RGB', (size, size), navy)

    # Redimensionner la tour pour qu'elle tienne dans le carré (avec marge)
    margin = int(size * 0.1)  # 10% de marge
    target_size = size - (margin * 2)

    # Calculer ratio pour conserver proportions
    ratio = min(target_size / source_img.size[0], target_size / source_img.size[1])
    new_width = int(source_img.size[0] * ratio)
    new_height = int(source_img.size[1] * ratio)

    # Redimensionner avec antialiasing de qualité
    resized = source_img.resize((new_width, new_height), Image.Resampling.LANCZOS)

    # Convertir en RGBA si nécessaire (pour gérer transparence)
    if resized.mode != 'RGBA':
        resized = resized.convert('RGBA')

    # Centrer sur le fond navy
    x = (size - new_width) // 2
    y = (size - new_height) // 2

    # Créer version RGBA du fond pour composer
    icon_rgba = Image.new('RGBA', (size, size), navy + (255,))
    icon_rgba.paste(resized, (x, y), resized if resized.mode == 'RGBA' else None)

    # Convertir en RGB pour PNG final
    icon_final = Image.new('RGB', (size, size), navy)
    icon_final.paste(icon_rgba, (0, 0))

    # Sauvegarder
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    icon_final.save(output_path, 'PNG', optimize=True, quality=95)

    # Obtenir taille fichier
    file_size = os.path.getsize(output_path)
    print(f"✅ Créé: {output_path} ({size}x{size}px, {file_size:,} bytes)")

# Créer les deux favicons
create_square_icon(tower, 32, output_icon_32)
create_square_icon(tower, 180, output_icon_180)

print("\n🎉 Favicons créés avec succès!")
print("\n📋 Prochaines étapes:")
print("1. Test local: npm run dev")
print("2. Vérifier onglet navigateur (http://localhost:3003)")
print("3. Commit: git add src/app/icon.png src/app/apple-icon.png")
print("4. Push: git push origin main")
print("\n🚀 Next.js génère automatiquement les balises <link> !")
