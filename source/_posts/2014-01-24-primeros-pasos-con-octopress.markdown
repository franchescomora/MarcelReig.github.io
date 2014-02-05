---
layout: post
title: "Primeros pasos con Octopress"
date: 2014-01-24 19:53:52 +0100
comments: true
categories: 
---
Este es mi primer post en Octopress, haré una pequeña introducción de este sistema de Blogging e intentaré hacer una pequeña guía de instalación.
<!-- more -->


Hasta ahora he utilizado Wordpress para correr mi blog y todavía lo utilizo como cms, pero para escribir mis propios posts, Octopress me parece la opción ideal, sigue leyendo para conocer las razones.

##Que es Jekyll? <br>
{% img left /images/jekyll.jpg 200px logo octopress %}
Jekyll es una sistema para crear sitios web estáticos creado en Ruby. 

<br>
<br>
<br>
 
##Que es Octopress? <br>
{% img left /images/octopress-logo.png 200px 100px logo octopress %}
Octopress es un framework basado en Jekyll, aportando algunas mejoras y facilitando un poco las cosas, parece una buena opción para empezar.

<br>
<br>
<br>
<br>

##Que lleva Octopress recien sacado de la caja?

* Una plantilla semántica HTML5.
* Un layout responsive preparado para móviles.
* Soporte para Twitter, Google Plus One, Disqus Coments, Pinboard, Delicious y Google Analytics.
* Una fácil estrategia para alojar tu web con Github Pages o Rsync.
* Soporte para POW.
* Compass y Sass.
* Resaltado de sintaxis Solarized.
* Un montón de pluguins interesantes listos para usar.


##Ventajas frente a Wordpress como sistema de blogging: <br>

* No necesitas base de datos.
* No necesitas un servidor local tipo MAMP para hacer pruebas.
* Utiliza Markdown, lo que hace que escribir sea muy cómodo.
* Github te permite alojar tu blog Jekyll u Octopress grátis en sus servidores.
* Hace uso de Git, lo que viene muy bien para acostumbrarse a este sistema de control de versiones.
* Hace uso de la terminal, lo que te obliga a utilizar los comandos básicos de la Shell de Unix.(Ni idea de como funciona todo esto en Windows).
* Te permite escribir tus post en local, aunque no tengas conexión a internet y subirlos posteriormente cuando estén listos.


__Octopress__ se autodescribe como un framework para hackers, de acuerdo tal vez estén exajerando un poco, no es necesario ser un hacker para utilizarlo, pero no es un mal principio :)<br>
Estas son algunas de las tecnologías con las que vas a trastear si decides darle caña al blogging como un hacker:

* **Ruby**. No necesitas saber Ruby pero si necesitas tenerlo instalado en tu máquina.
* **RVM** o **rbenv**. Son herramientas muy útiles para manejar distintas versiones de Ruby.
* **Git** Quien no ha oido hablar de Git a estas alturas?
* **Github pages** o **Heroku**. Opciones de alojamiento gratuitas para todos!
* **ssh keys**. Donde me deje las llaves?
* **Markdown** Para escribir tus post cómodamente.
* **Terminal** Si, ya empiezo a sentirme como un Hacker.

##Lo que necesitas antes de empezar

1. [Instala Git](http://git-scm.com/downloads)
2. Instala Ruby 1.9.3 o mayor usando [rbenv](https://github.com/sstephenson/rbenv) o [RVM.](http://rvm.io/)

Comprueba tu versión de Ruby con <code>ruby --version</code> si no tienes por lo menos la 1.9.3 revisa tu instalación de rbenv o RVM.

Descárgate Octopress.

```
git clone git://github.com/imathis/octopress.git octopress
cd octopress
```
Instala las dependencias.

``` 
gem install bundler
rbenv rehash    # Si utilizas rbenv, utiliza está opción
bundle install
```

Instala el theme por defecto de Octopress.

```
rake install
```

##Desplegando tu blog

Hay varias formas de desplegar tu blog fácilmente en Octopress:

1. Github Pages
2. Heroku
3. Rsync

Mi elección ha sido utilizar __Github Pages__, si prefieres otra, [visita el sitio oficial.](http://octopress.org/docs/deploying/)

Con Github Pages de nuevo tienes dos opciones, utilizar páginas Github de usuario/organizaciones o utilizar páginas Github de proyecto (hg-pages).

En mi caso he utilizado _páginas de usuario/organizaciones_ y esta es la opción de la que voy a hablar.

Crea un [nuevo repositorio de Github](https://github.com/new) y nombra el repositorio con el formato: <code>username.github.io</code> donde <code>username</code> es tu nombre de usuario de GitHub o el nombre de organización, esto es importante si le pones cualquier otro nombre no funcionará.

Github Pages para usuarios/organizaciones utiliza la rama master como el directorio público en el servidor web, sirviendo tus páginas en la url: <code>http://username.github.io</code><br>
Vas a trabajar en la rama source para después commitear el contenido generado en la rama master.<br> Octopress tiene una configuración que te ayuda con todo esto, para decirle a Octopress que quieres utilizar GitHub pages, abre la terminal e introduce este comando:
```
rake setup_github_pages
```
La tarea rake te preguntará por la URL de tu repositorio de Github. Copia la url SSH o HTTPS de tu recién creado repositorio, que será algo así: <code>git@github.com:username/username.github.io.git</code> y pegaló como respuesta.

Ahora introduce estos dos comandos:
```
rake generate
rake deploy
```
Esto generará tu blog.
No te olvides de commitear el código de tu blog.
```
git add .
git commit -m 'tu mensaje'
git push origin source
```
No desesperes, el deploy se toma su tiempo dale unos 10 min. después de esto deberias de poder ver tu sitio en la url <code>http://tunombredeusuario.github.io</code>

Para más información [leer la documentación oficial.](http://octopress.org/docs/deploying/github/)

Eso es todo amigos, espero haber aclarado algo y que pronto estéis blogueando como hackers!<br>