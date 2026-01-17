FROM nginx:alpine
COPY . /usr/share/nginx/html
# Nginx가 8080 포트를 사용하도록 설정 파일 수정
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
