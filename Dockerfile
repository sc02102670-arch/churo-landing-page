# 1단계: 모든 소스 코드를 합쳐서 완성본(Build) 만들기
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 완성된 파일들을 웹 서버에 올리기
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
# 구글 클라우드 런을 위한 포트 설정 (80 -> 8080)
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
