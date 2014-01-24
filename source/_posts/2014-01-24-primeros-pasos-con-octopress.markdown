---
layout: post
title: "Primeros pasos con Octopress"
date: 2014-01-24 19:53:52 +0100
comments: true
categories: 
---

Hasta ahora he utilizado Wordpress para correr mi blog y todavía lo utilizo para mis clientes, pero para escribir mis propios posts, Octopress parece mucho más divertido!
<!-- more -->


{% img left /images/octopress-logo.png 300px 200px logo octopress %}
Mi primer post en Octopress será como no, una pequeña guía introductoría y de instalación.

__Que es Jekyll?__ <br> Jekyll es una sistema para crear sitios web estáticos. 
 
__Que es Octopress?__ <br> Octopress es un framework basado en Jekyll, aportando algunas mejoras y facilitando un poco las cosas.

__Que lleva Octopress?__

* Una plantilla semántica HTML5.
* Un layout responsive preparado para móviles.
* Soporte para Twitter, Google Plus One, Disqus Coments, Pinboard, Delicious y Google Analytics.
* Una fácil estrategia para alojar tu web con Github Pages o Rsync.
* Soporte para POW.
* Compass y Sass.
* Resaltado de sintaxis Solarized.
* Un montón de pluguins interesantes listos para usar.



__Algunas de las ventajas que le veo frente a Wordpress como sistema de blogging:__ <br>

* No necesitas base de datos.
* No necesitas un servidor local tipo MAMP para hacer pruebas.
* Utiliza Markdown.
* Github te permite alojar tu web grátis en sus servidores incluso con tu propio nombre de dominio!
* Hace uso de Git.
* Hace uso de la terminal.
* Te permite escribir tus post en local, aunque no tengas conexión y subirlos posteriormente.



__Octopress__ se autodescribe como un framework para hackers, de acuerdo tal vez estén exajerando un poco, no es necesario ser un hacker para utilizarlo, pero no es un mal principio :)

__Algunas de las tecnologías con las que vas a trastear si decides darle caña al blogging como un hacker:__

* **Ruby**. No necesitas saber ruby pero si necesitarás tenerlo instalado en tu máquina.
* **RVM** o **Rbenv**. Van a serte muy útiles para manejar distintas versiones de ruby.
* **Git**
* **Github pages** o **Heroku**
* **ssh keys**
* **Markdown**
* **Terminal** 

__Lo que necesitas antes de empezar__

1. [Instala Git](http://git-scm.com/downloads)
2. Instala Ruby 1.9.3 o mayor usando [rbenv](https://github.com/sstephenson/rbenv) o [RVM.](http://rvm.io/)

Comprueba tu versión de Ruby con <code>ruby --version</code> si no tienes por lo menos la 1.9.3 revisa tu instalación de rbenv o RVM.

__Descárgate Octopress.__

```
git clone git://github.com/imathis/octopress.git octopress
cd octopress
```
__Instala las dependencias.__

``` 
gem install bundler
rbenv rehash    # Si utilizas rbenv, utiliza está opción
bundle install
```


__Instala el theme por defecto de Octopress.__

```
rake install
```

__Desplegando__

Hay varias formas de desplegar tu blog fácilmente en Octopress:

1. Github Pages
2. Heroku
3. Rsync

Mi elección ha sido utilizar Github Pages, si prefieres otra opción [visita el sitio oficial.](http://octopress.org/docs/deploying/)

Crea un [nuevo repositorio de Github](https://github.com/new) y nombra el repositorio con el formato: <code>username.github.io</code> donde <code>username</code> es tu nombre de usuario de GitHub o el nombre de organización.

Github Pages para usuarios y organizaciones utiliza la rama master como el directorio público en el servidor web, sirviendo tus páginas en la url: <code>http://username.github.io/project</code>
Vas a trabajar en la rama source para después commitear el contenido generado en la rama master. Octopress tiene una configuración que te ayuda con todo esto.

```
rake setup_gitgub_pages
```
La tarea rake te preguntará por la URL de tu repositorio de Github. Copia la url SSH o HTTPS de tu recién creado repositorio, que será algo así: <code>git@github.com:username/username.github.io.git</code> y pegaló como respuesta.

Despues introduce:
```
rake generate
rake deploy
```
Esto generará tu blog.
No te olvides de commitear el codigo de tu blog.
```
git add .
git commit .m 'tu mensaje'
git push origin source
```
Para más información [leer la documentación oficial.](http://octopress.org/docs/deploying/github/)

Eso es todo amigos, espero haber aclarado algo y que pronto estéis blogueando como hackers!