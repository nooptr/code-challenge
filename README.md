# code-challenge
Code Challenge by docker sandbox

**Chú ý:** source code này chỉ support cho hệ điều hành linux, mac os thôi nhé. window thì có vẻ không chạy (tại không có máy window để test)

## Build image cho docker

### PHP

```
cd docker
docker build -t ntcd_php -f php/Dockerfile .
docker run -it --rm -v /tmp:/tmp ntcd_php php /tmp/main.php /tmp/output
```

### Javascript

```
cd docker
docker build -t ntcd_javascript -f javascript/Dockerfile .
docker run -it --rm -v /tmp:/tmp ntcd_javascript node /tmp/main.js /tmp/output
```

## Start API

```
npm run start
```

## API

Endpoint: http://localhost:3000/run/:language

Request

```
{
	"content": "<?php $a = 12; $b = $a * 2; echo $b;"
}
```

Response

```
{
  "stdout": "24",
  "error": "",
  "time": ".0911\n"
}
```
