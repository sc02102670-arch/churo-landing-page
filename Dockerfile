FROM nginx:alpine
COPY . /usr/share/nginx/html
# 80번 포트를 쓰는 설정을 8080으로 강제 변경합니다.
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
