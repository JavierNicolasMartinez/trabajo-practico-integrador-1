*TRABAJO PRÁCTICO INTEGRADOR DE TLP II*

END-POINTS:
AUTH:
http://localhost:3000/api/auth/register
"username": "abc",
    "email": "prueba@gmail.com",
    "password": "Prueba1234",
    "first_name": "Javier",
    "last_name": "Martínez",
    "biography": "Developer in process",
    "avartar_url": "localhost.com",
    "birth_date": "2001-12-26",
    "role": "admin"

http://localhost:3000/api/auth/login
{
    "username": "abc",
    "password": "Prueba1234"
}

http://localhost:3000/api/auth/logout
http://localhost:3000/api/auth/profile
http://localhost:3000/api/auth/profile/1

USER:
http://localhost:3000/api/users
http://localhost:3000/api/users/1

TAG:
http://localhost:3000/api/tags
http://localhost:3000/api/tags/1

ARTICLE-TAGS:
http://localhost:3001/api/articles-tags
http://localhost:3001/api/articles-tags/1

ARTICLE:
http://localhost:3001/api/articles
"title": "hola1",
    "content": "asdasnd11jasnjdasjdnjasndjasndjasjdnasjndjasndjasndjsandjsandjnasjdasjdnajsndjasndjansjdansjdasjndjasndjnasdnasdjas", 
    "excerpt": "dasmdkamdkas1",
    "status": "archived"

http://localhost:3001/api/articles
http://localhost:3001/api/articles/1
http://localhost:3001/api/article/user
http://localhost:3001/api/article/user/1
