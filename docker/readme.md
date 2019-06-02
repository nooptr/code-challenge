### PHP

```
docker build -t ntcd_php -f php/Dockerfile .
docker run -it --rm -v /tmp:/tmp ntcd_php php /tmp/main.php /tmp/output
```

### Javascript

```
docker build -t ntcd_javascript -f javascript/Dockerfile .
docker run -it --rm -v /tmp:/tmp ntcd_javascript node /tmp/main.js /tmp/output
```