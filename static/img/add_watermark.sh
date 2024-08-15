#!/bin/bash

# Dossier courant
current_folder=$(pwd)  # Le dossier où se trouve le script
watermark="watermark/watermark.png"

# Création d'un dossier pour les images redimensionnées
output_folder="$current_folder/watermarked"
mkdir -p "$output_folder"

# Traitement de chaque image PNG dans le dossier courant
for image in "$current_folder"/*.png; do
    # Nom du fichier sans le chemin
    filename=$(basename "$image")
    # Nom du fichier de sortie
    output="$output_folder/$filename"
    
    # Redimensionnement de l'image
    convert "$image" "$watermark" -gravity southeast -composite "$output"
    
    echo "Image watermarquée : $output"
done
