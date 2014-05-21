

# Para el theme de Foundation
add_import_path "bower_components/foundation/scss"
javascripts_dir = "source/js"

require 'sass-globbing'

# Require any additional compass plugins here.
project_type = :stand_alone

# Publishing paths
http_path = "/"
http_images_path = "/images"
http_generated_images_path = "/images"
http_fonts_path = "/fonts"
css_dir = "public/stylesheets"

# No me funcionaba por no tener esto,aparte de tener que añadir manualmente la carpeta bower_components a la raiz de octopress
sass_dir = "scss"

# Local development paths
sass_dir = "sass"
images_dir = "source/images"
fonts_dir = "source/fonts"

line_comments = false
output_style = :compressed


